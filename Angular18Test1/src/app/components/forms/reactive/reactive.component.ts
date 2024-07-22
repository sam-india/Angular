import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  studentForm: FormGroup = new FormGroup({
      firstName: new FormControl("",[Validators.required, Validators.minLength(4)]), 
      lastName: new FormControl(""),//without default string the form control default value will be considers as null, to avoid that we can use empty string "".
      userName: new FormControl("some@mail",[Validators.email]),
      city: new FormControl(""),
      state: new FormControl(""),
      zipcode: new FormControl(""),
      isTermAccepted:  new FormControl("")
  });

  formValue: any;

  onSave(){
    this.formValue =  this.studentForm.value;
  }

}
