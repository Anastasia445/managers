import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ManagersComponent } from './managers/managers.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'managers/:idDepartment', component: ManagersComponent },
 // { path: 'managers', component: ManagersComponent },
  { path: 'employees/', component: EmployeesComponent },
  { path: "**",redirectTo:"/main"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
