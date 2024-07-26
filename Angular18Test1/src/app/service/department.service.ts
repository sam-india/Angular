import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { 

  }

  apiUrl: string =  "https://projectapi.gerasim.in/api/Complaint/";

  getAllDepartment(){
    return this.http.get(this.apiUrl+"GetParentDepartment");
  }

  saveDepartment(dept: any){
    return this.http.post(`${this.apiUrl}AddNewDepartment`,dept);
  }

  updateDepartment(dept: any){
    return this.http.post(this.apiUrl+"UpdateDepartment",dept);
  }

  deleteDepartment(deptId:any){
    return this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+deptId);
  }

  addTwoNum(num1:number, num2:number){
    debugger;
    return num1+num2;
  }

}
