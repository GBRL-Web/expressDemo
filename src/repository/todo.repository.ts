import TodoModel from "../model/todo.model";

export default class TodoRepository {

    todos : TodoModel[] = [
        new TodoModel("Decuver"),
        new TodoModel("Aller au bosser"),
        new TodoModel("Se reveiller")
    ]

    getAll = (): TodoModel[] => {
        return this.todos;
    }
    getById = (id: number): TodoModel => {
        return this.todos[id];
    }
}