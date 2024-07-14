import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe, DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName :string =  'Angular';
  secondStr :string = 'this is a demo string';
  currentDate :Date = new Date();
  currentTime : Observable<Date> = new Observable<Date>;
  student :any = {
    name:'Sajal',
    city: 'pune',
    empId: 123,
    state: null // If the value is null/undefined or empty then the pipe will return NA
  };
  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
