import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() buttonText: string  = '';
  @Input() buttonClass: string ='';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick(){
    debugger;
    this.onBtnClick.emit('Sending Data from CHild myButton to Parent Post API');
  }

  

}
