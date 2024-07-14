import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  dayNumber :string = '';
  city :any[] = ['Pune','Singapore','Luxumberg','Paris'];

  studentList :any[] = [
    {studentId: 1, name:'AA1', totalMarks: '20', gender:'Male', city:'Pune1', isActive: false},
    {studentId: 2, name:'AA2', totalMarks: '40', gender:'Female', city:'Pune2', isActive: false},
    {studentId: 3, name:'AA3', totalMarks: '50', gender:'Male', city:'Pune3', isActive: true},
    {studentId: 4, name:'AA4', totalMarks: '60', gender:'Female', city:'Pune4', isActive: false},
    {studentId: 5, name:'AA5', totalMarks: '80', gender:'Male', city:'Pune5', isActive: true}
  ];
}
