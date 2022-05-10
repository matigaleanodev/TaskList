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
  showAddTask:boolean =false;
  suscription: Subscription;

  constructor(
    private uiService: UiService,
    private formBuilder: FormBuilder
  ) {
    this.suscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);

    this.form= this.formBuilder.group({
      text:['',[Validators.required, Validators.minLength(8)]],
      day:['',[Validators.required]],
      reminder:[Boolean,[]]
    })
  }

  ngOnInit(): void {}

  get Text(){
    return this.form.get("text");
  }
 
  get Day(){
   return this.form.get("day");
  }

  get TextValid(){
    return this.Text?.touched && !this.Text?.valid;
  }

  get DayValid() {
    return false
  }
  
  onSubmit(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.onAddTask.emit(this.form.value);
      this.form.reset();
      alert("Todo salio bien ¡Tarea Eviada!");
    } else {
      this.form.markAllAsTouched();
    }
    
  }

  
}
