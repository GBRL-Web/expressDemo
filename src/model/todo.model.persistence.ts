export default class TodoModelPersistence {
    id!: number;
    task!: string;
    completed!: boolean;
  
    constructor(...data: TodoModelPersistence[]) {
        const keys = Object.keys(new TodoModelPersistence());
        for (const key of keys) {
          if (data.hasOwnProperty(key)) {
            this[key] = data[key];
          }
        }
    }
  }