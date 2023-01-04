import TodoModel from "../model/todo.model";

export default class TodoRepository {
  todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Aller au bosser"),
    new TodoModel("Se reveiller"),
  ];

  getAll = (): TodoModel[] => {
    return this.todos;
  };
  getById = (id: number): TodoModel => {
    return this.todos[this.todos.findIndex((t) => t.id === id)];
  };
  deleteById = (id: number): void => {
    this.todos = this.todos.filter(function (obj: TodoModel) {
      return obj.id != id;
    });
  };
  createNew = (todo: TodoModel): void => {
    this.todos.push(todo);
  };
  editTodo = (index: number ,todo: TodoModel): void => {
    this.todos[this.todos.findIndex((t) => t.id === index)] = todo;
    console.log(this.todos);
    console.log(this.todos.indexOf(this.todos[index]));
  }
}
