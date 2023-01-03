import express from 'express'
import TodoController from '../controller/todo.controller';
import TodoRepository from '../repository/todo.repository';
import TodoService from '../service/todo.service';


const repo = new TodoRepository();
const service = new TodoService(repo);
const controller = new TodoController(service);

const router = express.Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.post("/", controller.createNew);

export default router;