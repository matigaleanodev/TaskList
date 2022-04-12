import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from 'src/app/services/tasks';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string ="";
  day:string ="";
  reminder:boolean =false;
  showAddTask:boolean =false;
  suscription?: Subscription;
  constructor(
    private uiService: UiService
  ) {
    this.suscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.text.length === 0){
      alert('Please add a Task');
      return
    }
    const {text,day,reminder} = this
    const newTask = {text,day,reminder}

    this.onAddTask.emit(newTask);
  }

  
}
