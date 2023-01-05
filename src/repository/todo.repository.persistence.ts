import axios from 'axios';
import 'dotenv/config';
import TodoModelPersistence from '../model/todo.model.persistence';

export default class TodoRepositoryPersistence {
    #URL = process.env.SRVURL

    getAllTodos = async () : Promise<TodoModelPersistence[]> => { 
        return axios.get(`${this.#URL}`).then(res => res.data);
    }

    getTodoById = async (id : number) : Promise<TodoModelPersistence> => {
        return axios.get(`${this.#URL}/${id}`).then(res => res.data);
    }

    createTodo = async (todo: TodoModelPersistence) : Promise<TodoModelPersistence> => { 
        return axios.post(`${this.#URL}`, todo).then(res => res.data);
    }

    updateTodo = async (todo: TodoModelPersistence) : Promise<TodoModelPersistence> => {
        return axios.put(`${this.#URL}/${todo.id}`, todo).then(res => res.data);
    }

    deleteTodo = (id : number) : void => {
        axios.delete(`${this.#URL}/${id}`);
    }

    patchTodo = async (id: number, todo: TodoModelPersistence) : Promise<TodoModelPersistence> => {
        return axios.patch(`${this.#URL}/${id}`, todo).then(res => res.data);
    }
}
