import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;
  num1 :string = "";
  num2 :string = "";
  isActive: boolean = false;
  selectedState :string = '';

  navigateToAttribute(){
    this.router.navigateByUrl("/attribute-dir");
  }

  constructor(private router: Router)
  {

  }

  cityArray :string[] = ['Singapore','Pune','London','Paris'];
  studentList :any[] = [
    {studentId: 1, name:'AA1', city:'Pune1', isActive: false},
    {studentId: 2, name:'AA2', city:'Pune2', isActive: false},
    {studentId: 3, name:'AA3', city:'Pune3', isActive: true},
    {studentId: 4, name:'AA4', city:'Pune4', isActive: false},
    {studentId: 5, name:'AA5', city:'Pune5', isActive: true}
  ];


  showDiv1() {
    this.isDiv1Visible = true;
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
//              OR
    // if(this.isDiv2Visible == true)
    //   this.isDiv2Visible = false;
    // else
    //   this.isDiv2Visible = true;
  }



}
