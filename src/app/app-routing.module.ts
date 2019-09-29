import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './service/auth-guard.service';
import { CandeativeService } from './service/candeative.service';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { HomeComponent } from './home/home/home.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './login/register.component';
import { UserDataComponent } from './user/user-data/user-data.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'insert',component:InsertStudentComponent,canActivate: [AuthGuardService],canDeactivate:[CandeativeService]},

  {path:'details',component:GetDetailsComponent,canActivate: [AuthGuardService]},
  {path:'details/:id',component:UserDataComponent,canActivate: [AuthGuardService]},
  {path:'deleteRecord',component:DeleteDataComponent,canActivate: [AuthGuardService]},
  {path:'home',component:HomeComponent,canActivate: [AuthGuardService]},
  {path:'register',component:RegisterComponent}


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
