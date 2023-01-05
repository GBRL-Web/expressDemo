import TodoRepositoryPersistence from "../repository/todo.repository.persistence";
import TodoModelPersistence from "../model/todo.model.persistence";

export default class TodoServicePersistence {
  #repo: TodoRepositoryPersistence;

  constructor(repo: TodoRepositoryPersistence) {
    this.#repo = repo;
  }

  getAll = async (): Promise<TodoModelPersistence[]> => {
    const result = await this.#repo.getAllTodos();
    return result;
  };
  getById = (id: number) => {
    return this.#repo.getTodoById(id);
  };

  deleteTodo = (id: number) => {
    this.#repo.deleteTodo(id);
    return `Repo deleted successfully.`;
  };

  createTodo = (task: TodoModelPersistence) => {
    const todoNew = new TodoModelPersistence(task);
    console.log(todoNew);
    this.#repo.createTodo(todoNew);
  };

  patchTodo = (index:number , newTodo:TodoModelPersistence) => {
    this.#repo.patchTodo(index, newTodo);
  }
}
