import { Routes } from '@angular/router';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';

export const routes: Routes = [
    // {
    //     path: 'add-emp',
    //     component: AddEmployeeComponent
    // },
    // {
    //     path: 'data-binding',
    //     component: DataBindingComponent
    // },
    // {
    //     path: 'emp-list',
    //     component: EmployeeListComponent
    // },
    {
        path: 'structural-dir',
        component: StructuralDirComponent
    },
    {
        path: 'attribute-dir',
        component: AttributeDirComponent
    },
    {
        path: 'app-ifelse',
        component: IfelseComponent
    },
    {
        path: 'app-for',
        component: ForComponent
    },
    {
        path: 'app-pipe',
        component: PipeComponent
    },
    {
        path:'app-template',
        component:TemplateComponent
    },
    {
        path:'app-reactive',
        component:ReactiveComponent
    },
    {
        path:'app-get-api',
        component:GetApiComponent
    },
    {
        path:'app-post-api',
        component:PostApiComponent
    }
];