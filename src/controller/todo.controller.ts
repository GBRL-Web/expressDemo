import { Request, Response } from "express";
import TodoServicePersistence from "../service/todo.service.persistence";
import TodoModelPersistence from "../model/todo.model.persistence";

export default class TodoController {
  service: TodoServicePersistence;

  constructor(service: TodoServicePersistence) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const todos = await this.service.getAll();
    res.send(todos);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const id: number = parseInt(req.params.id);
    const todo: TodoModelPersistence = await this.service.getById(id);
    if (todo) {
      res.send(todo);
    } else {
      res.send("ToDo entry non-existent!");
    }
  };

  deleteById = async (req: Request, res: Response): Promise<void> => {
    const id: number = parseInt(req.params.id);
    const todo: TodoModelPersistence = await this.service.getById(id);
    if (todo) {
      res.send(this.service.deleteTodo(id));
    } else {
      res.send(`ToDo entry can not be deleted. It is non-existent.`);
    }
  };

  createNew = async (req: Request, res: Response): Promise<void> => {
    const todo = await this.service.createTodo(req.body);
    res.send(todo);
  };

  editTodo = async (req: Request, res: Response): Promise<void> => {
    const index: number = parseInt(req.params.id);
    let newTask = req.body;
    const service = await this.service.getById(index);
    if (service) {
      this.service.patchTodo(index, newTask);
      res.send('Edited successfully!')
    } else {
      this.service.createTodo(newTask.task);
      res.sendStatus(200);
    }
   };

   editTodoPatched = async (req: Request, res: Response): Promise<void> => { 
    const index: number = parseInt(req.params.id);
    const service = await this.service.getById(index);
    const body = req.body;
    let todo : TodoModelPersistence;
    if (service) {
      todo = await this.service.getById(index);
    } else {
      throw new Error('No such entry found!');
    }
    if (body.task !== undefined) {
      todo.task = body.task;
      console.log('Body task set.')
    } else {
      console.log('No task text found!')
    }
    if (body.completed !== undefined) {
      todo.completed = body.completed;
      console.log('Completed set!')
    } else {
      todo.completed = todo.completed;
      console.log('No completed found.')
    }
    this.service.patchTodo(index, todo);
    res.sendStatus(200);
   }
}
