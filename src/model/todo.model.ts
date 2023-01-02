export default class TodoModel {
    id: number
    task: string
    completed:boolean
    static count:number = 0;


    constructor(task:string) {
        this.id = TodoModel.count++;
        this.task = task;
        this.completed = false

    }
}