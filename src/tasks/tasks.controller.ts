import {Controller, Delete,Patch, Get,Post, Put, Body, Query, Param} from '@nestjs/common'
import { TasksService } from './tasks.service';

@Controller("/tasks")
export class TaskController{

    // este curso e smuy bueno
    //https://www.youtube.com/watch?v=wsqcg5ZtUMM&t=3403s


    constructor (private tasksService:TasksService) { }

    @Get()
    getAllTasks( ){
      return this.tasksService.getTasks();
    }
    @Get('/:id')
    getTask(@Param('id') id:string){
      return this.tasksService.getTask( parseInt(id));
    }
    @Post()
    createTask(@Body() task: any){
      return this.tasksService.createTask(task);
    }
    @Put()
    updateTask(){
      return this.tasksService.updateTask();
    }
    @Delete()
    deleteTask(){
      return this.tasksService.deleteTask();
    }
    @Patch()
    updateTaskStatus(){
      return this.tasksService.updateTaskStatus();
    }
}