import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/services/task';   


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task);
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task);
  }

  addTask(task: Task){
    this.taskService.addTask(task);
    this.tasks.push(task);
  }

}