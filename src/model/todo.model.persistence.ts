export default class TodoModelPersistence {
    id!: number
    task: string
    completed: boolean
    
        constructor(task: string = "") {
            this.task = task;
            this.completed = false;
        }
}