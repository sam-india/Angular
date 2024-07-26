import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  
  userList: any[] = [];
  customerList: any[] = [];

  constructor(private http: HttpClient){
    this.getAllUSers(); // TO initialize at the time of component creation
  }


  // The belowAPIcalls shouldbe donein service not in component
  getAllUSers() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=> {
      debugger;
      this.userList = result;
    });
  }

  getAllCustomer(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=> {
      debugger;
      this.customerList = result.data;
    },error=> {
      debugger;
    });
  }

}
