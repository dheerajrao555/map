import { AppserviceService } from './appservice.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  pwd: string;
  feedback: string;
  expression:boolean=false;
  storeUserCredentials: any;
  storeName;
  storePassword;

  constructor(private _ap: AppserviceService,private router: Router) {

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

  loginUser(userName,pwd) {
    alert(userName)
    for (var i = 0; i <= this.storeUserCredentials.length; i++) {
      if (userName == this.storeUserCredentials[i].name && pwd == this.storeUserCredentials[i].pwd) {
        alert(this.storeUserCredentials[i].name )
       // this.ss.setCurrentUser(this.storeUserCredentials[0]);
      // localStorage.setItem('user',userName)
      sessionStorage.setItem('authenticateUser',userName)
        this.router.navigate(['/home']);
        break;
      }
      else {
        this.expression =true;
        //alert("invalid credentias")
      this.router.navigate(['/login']);



      }

    }


  }
  isUserLoggedIn(){

    let user=sessionStorage.getItem('authenticateUser');
    alert("user==>"+user)


     return !(user === null)

  }
  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
