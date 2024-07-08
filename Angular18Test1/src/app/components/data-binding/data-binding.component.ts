import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular 18";
  inputType = "radio";
  rollNumber: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();
  myClassName: string = "bg-primary";
  textInputType: string  = "text";
  stateName:  string ="Maharastra";
  firstName = signal("sajal samaiya123");
  constructor() {

  }
  showAlert(message: string) {
    alert(message);
  }
  changeCourseName() {
    this.courseName="react js";
    this.firstName.set("Sachin");
  }
}
