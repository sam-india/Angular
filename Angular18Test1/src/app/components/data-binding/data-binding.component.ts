import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular 18";
  inputType = "radio";
  rollNumber: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "bg-primary";
  textInputType: string  = "text";

  constructor() {

  }
  showAlert(message: string) {
    alert(message);
  }
  changeCourseName() {
    this.courseName="react js";
  }
}
