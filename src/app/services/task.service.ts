import { Injectable } from '@angular/core';

import { Task } from './task';
import { Tasklist } from './tasklist'; 

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = Tasklist;

  constructor() {}

  getTasks(){
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify(this.taskList));
    } else {
      this.taskList = JSON.parse(localStorage.getItem('tasks')!);
    }
    return this.taskList;
  }
  
  addTask(task:Task){
    if (localStorage.getItem('tasks') === null) {
      this.taskList.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.taskList));
    } else {
      this.taskList = JSON.parse(localStorage.getItem('tasks')!);
      this.taskList.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }      
  }

  deleteTask(task:Task){
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === task.id) {
        this.taskList.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      }
    }
  }

  updateTaskReminder(task:Task){
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === task.id) {
        this.taskList[i].reminder = task.reminder;
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      }
    }
  }

}
