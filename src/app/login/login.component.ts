import { Component, OnInit } from '@angular/core';

import { AppserviceService } from '../service/appservice.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  pwd: string;
  feedback: string;
  expression: boolean = false
  storeUserCredentials: any;
  storeName;
  storePassword;


  constructor(private router: Router, private _ap: AppserviceService,private _ls:LoginService) { }

  showMessage;


  ngOnInit() {
    this._ap.getUserPassword(this.username, this.pwd).subscribe((data) => {
      this.storeUserCredentials = data



      // for (let entry of this.storeUserCredentials) {
      //   // console.log(entry)
      //   //console.log(entry.name); // 1, "string", false
      //   // alert(entry.name
      //   this.storeName = entry.name
      //   console.log(this.storeName)
      //   this.storePassword = entry.pwd
      // }

    })
  }




  login() {

    this._ls.loginUser(this.username,this.pwd);
    this.ifUserNotLogedIn();




    // for (var i = 0; i <= this.storeUserCredentials.length; i++) {
    //   if (this.username == this.storeUserCredentials[i].name && this.pwd == this.storeUserCredentials[i].pwd) {
    //    // this.ss.setCurrentUser(this.storeUserCredentials[0]);
    //     this.router.navigate(['/home']);
    //   }
    //   else {
    //     this.expression = true
    //   }

    // }




  }

  ifUserNotLogedIn(){
    alert("calling ifUserNotLogedIn")
    if(this._ls.expression){
      alert("invalid credentials")

    }

  }



}
