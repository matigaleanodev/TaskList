import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/services/tasks';  


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>{
      this.tasks = tasks
    });
  }

}
