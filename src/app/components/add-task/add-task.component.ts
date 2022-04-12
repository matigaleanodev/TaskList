import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Task } from 'src/app/services/tasks';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  form: FormGroup;
  text:string ="";
  day:string ="";
  reminder:boolean =false;
  showAddTask:boolean =false;
  suscription: Subscription;

  constructor(
    private uiService: UiService,
    private formBuilder: FormBuilder
  ) {
    this.suscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddTask = value);
    
    this.form= this.formBuilder.group({
                                text:['',[Validators.required, Validators.minLength(8)]],
                                day:['', [Validators.required]]
   })
  }

  ngOnInit(): void {
    
  }



  onSubmit(event: Event){
    event.preventDefault; 
 
    if (this.form.valid){
      alert("Todo salio bien ¡Enviar Task!")
    }else{
      this.form.markAllAsTouched(); 
    }
    const {text,day,reminder} = this
    const newTask = {text,day,reminder}

    this.onAddTask.emit(newTask);
  }

  
}
