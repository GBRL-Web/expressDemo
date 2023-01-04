import { Request, Response } from "express";
import TodoService from "../service/todo.service";
import TodoModel from "../model/todo.model";

export default class TodoController {
  service: TodoService;

  constructor(service: TodoService) {
    this.service = service;
  }

  getAll = (req: Request, res: Response): void => {
    res.send(this.service.getAll());
  };
  getById = (req: Request, res: Response): void => {
    const id: number = parseInt(req.params.id);
    const todo: TodoModel = this.service.getById(id)!;
    if (todo) {
      res.send(todo);
    } else {
      res.send("ToDo entry non-existent!");
    }
  };
  deleteById = (req: Request, res: Response): void => {
    const id: number = parseInt(req.params.id);
    const todo: TodoModel = this.service.getById(id);
    if (todo) {
      res.send(this.service.deleteById(id));
    } else {
      res.send(`ToDo entry can not be deleted. It is non-existent.`);
    }
  };
  createNew = (req: Request, res: Response): void => {
    const todo = new TodoModel(req.body.text);
    this.service.createNew(todo);
    res.sendStatus(200);
  };
  editTodo = (req: Request, res: Response): void => {
    const index: number = parseInt(req.params.id);
    let newMod: TodoModel = new TodoModel(req.body.task);
    newMod.id = index;
    newMod.completed = req.body.completed;
    if (this.service.getById(index)) {
      this.service.editTodo(index, newMod);
      res.send('Edited successfully!')
    } else {
      this.service.createNew(newMod);
      res.sendStatus(200);
    }
   }
   editTodoPatched = (req: Request, res: Response): void => { 
    const index: number = parseInt(req.params.id);
    const body = req.body;
    let todo : TodoModel;
    if (this.service.getById(index)) {
      todo = this.service.getById(index);
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
    this.service.editTodo(index, todo);
    res.sendStatus(200);
   }
}
