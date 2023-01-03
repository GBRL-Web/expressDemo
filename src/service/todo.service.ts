import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";

export default class TodoService {

    repo: TodoRepository

    constructor(repo: TodoRepository){

        this.repo = repo;
    }

    getAll = () :TodoModel[] => {
        return this.repo.getAll();
    }
    getById = (id:number) => {
        return this.repo.getById(id);
     }

     deleteById = (id:number) => { 
        this.repo.deleteById(id);
        return `Repo deleted successfully.`
     }

     createNew = (str:string) => {
        const todo = new TodoModel(str);
        this.repo.createNew(todo);
     }
}