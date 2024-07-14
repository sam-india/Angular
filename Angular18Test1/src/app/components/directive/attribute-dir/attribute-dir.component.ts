import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1BgColor: string = "bg-danger";
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean  = false;

  customerStyle :any = {
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
    'border-radius':'50%'
};

  studentList :any[] = [
    {studentId: 1, name:'AA1', totalMarks: '20', gender:'Male', city:'Pune1', isActive: false},
    {studentId: 2, name:'AA2', totalMarks: '40', gender:'Female', city:'Pune2', isActive: false},
    {studentId: 3, name:'AA3', totalMarks: '50', gender:'Male', city:'Pune3', isActive: true},
    {studentId: 4, name:'AA4', totalMarks: '60', gender:'Female', city:'Pune4', isActive: false},
    {studentId: 5, name:'AA5', totalMarks: '80', gender:'Male', city:'Pune5', isActive: true}
  ];


  changeDiv1BgToRed(){
    this.div1BgColor="bg-danger";
  }
  changeDiv1BgToBlue(){
    this.div1BgColor="bg-primary";
  }
  changeIsActive() {
    this.isDiv2Active=!this.isDiv2Active;
  }

}
