import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppserviceService } from './service/appservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import {FormsModule} from '@angular/forms'
import { GetDetailsComponent } from './get-details/get-details.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule }    from '@angular/forms';
import { RegisterComponent } from './login/register.component';
import { SessionService } from './session.service';
import { UserDataComponent } from './user/user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertStudentComponent,
    LoginComponent,
    GetDetailsComponent,
    DeleteDataComponent,

    UserDataComponent,

    HomeComponent,

    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule,ReactiveFormsModule
  ],
  providers: [LoginService],

  bootstrap: [AppComponent]
})
export class AppModule { }
