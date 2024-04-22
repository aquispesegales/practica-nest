import { Injectable } from '@nestjs/common'

export interface User {
    name : string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks() {
        return this.tasks;
    }
    getTask(id:number) {
        return this.tasks.find(task => task.id===id)
    }
    createTask(task:any) {
        this.tasks.push({
            ...task,
            id:this.tasks.length+1
        });
        return task;
    }

    updateTask() {
        return 'Actualizando Tareas';
    }

    deleteTask() {
        return 'Eliminando Tareas';
    }

    updateTaskStatus() {
        return 'Actualiando estado';
    }
}