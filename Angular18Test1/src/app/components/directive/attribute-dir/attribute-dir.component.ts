import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1BgColor: string = "bg-danger";
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean  = false;

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
