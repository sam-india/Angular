import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from "../../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  constructor(private deptService: DepartmentService){
    debugger;
    this.deptService.addTwoNum(1,2);
    // this.deptService.apiUrl="23" access service fields like this
  }


  ngOnInit() {
    this.getDepartmentList();
  }

  deptObj:any  = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };

  departmentlist : any[] =  [];

  http = inject(HttpClient);

  onEdit(data:any){
    debugger;
    this.deptObj = data;
  }

  //Direct Get call is written here,we can rewrite the code using service
  // getDepartmentList(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=> {
  //     this.departmentlist = res.data;
  //   })
  // }

  getDepartmentList(){
    debugger;
    this.deptService.getAllDepartment().subscribe((res:any)=> {
      debugger;
      this.departmentlist = res.data; 
    })
  }

  // Direct post callto save dept.We can rewrite it using service
  // onSave() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any) => {
  //     if(res.result){
  //       debugger;
  //       alert("Department Added Successfilly");
  //       this.getDepartmentList();
  //   } else{
  //       debugger;
  //       alert(res.message);
  //   }
  //   })
  // }

  onSave() {
    debugger;
    this.deptService.saveDepartment(this.deptObj).subscribe((res:any) => {
      if(res.result){
        debugger;
        alert("Department Added Successfilly");
        this.getDepartmentList();
    } else{
        debugger;
        alert(res.message);
    }
    })
  }

  // Direct impl of update, The api call logic can be transferred to service
  // onUpdate() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any) => {
  //     if(res.result){
  //       debugger;
  //       alert("Department updated Successfilly");
  //       this.getDepartmentList();
  //   } else{
  //       debugger;
  //       alert(res.message);
  //   }
  //   })
  // }

  onUpdate() {
    debugger;
    this.deptService.updateDepartment(this.deptObj).subscribe((res:any) => {
      if(res.result){
        debugger;
        alert("Department updated Successfilly");
        this.getDepartmentList();
    } else{
        debugger;
        alert(res.message);
    }
    })
  }

  // onDelete(deptId:number) {
  //   const confirmDelete = confirm("Are you sure, you want to delete?");
  //   if(confirmDelete){
  //   this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+deptId).subscribe((res:any) => {
  //     if(res.result){
  //       debugger;
  //       alert("Department deleted successfully");
  //       this.getDepartmentList();
  //     } else {
  //       alert(res.message);
  //     }
  //   });}
  // }

  onDelete(deptId:number) {
    debugger;
    const confirmDelete = confirm("Are you sure, you want to delete?");
    if(confirmDelete){
    this.deptService.deleteDepartment(deptId).subscribe((res:any) => {
      if(res.result){
        debugger;
        alert("Department deleted successfully");
        this.getDepartmentList();
      } else {
        alert(res.message);
      }
    });}
  }

  getData(data: any){
    debugger;
    console.log(data);
  }

}