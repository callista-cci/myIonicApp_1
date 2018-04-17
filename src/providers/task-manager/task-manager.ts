import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../Model/Task';

/*
  Generated class for the TaskManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskManagerProvider {
 taskList = new Array<Task>();

  constructor() {
    console.log('Hello TaskManagerProvider Provider');

  }

  saveNewTask(task){
    console.log('Save New Task');
    console.log(task);
    this.taskList.push(task);
    console.log('taskList Count:'+this.taskList.length);
  }

  getTaskList(){
    return this.taskList;
  }
}
