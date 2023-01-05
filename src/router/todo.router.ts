import express from 'express'
import TodoController from '../controller/todo.controller';
import TodoRepositoryPersistence from '../repository/todo.repository.persistence';
import TodoServicePersistence from '../service/todo.service.persistence';


const repo = new TodoRepositoryPersistence();
const service = new TodoServicePersistence(repo);
const controller = new TodoController(service);

const router = express.Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.post("/", controller.createNew);
router.put("/:id", controller.editTodo);
router.patch("/:id", controller.editTodoPatched);

export default router;