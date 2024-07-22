import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

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

  onSave() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any) => {
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

  onEdit(data:any){
    debugger;
    this.deptObj = data;
  }

  onUpdate() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any) => {
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

  onDelete(deptId:number) {
    const confirmDelete = confirm("Are you sure, you want to delete?");
    if(confirmDelete){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+deptId).subscribe((res:any) => {
      if(res.result){
        debugger;
        alert("Department deleted successfully");
        this.getDepartmentList();
      } else {
        alert(res.message);
      }
    });}
  }

  getDepartmentList(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=> {
      this.departmentlist = res.data;
    })
  }
}
