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
}
