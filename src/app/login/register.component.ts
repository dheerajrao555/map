import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';
import { Registration } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 storeRegistrationDetails:Registration
 storeUser;

  constructor(private _ap:AppserviceService) { 
    this.storeRegistrationDetails=new Registration();
  }

  ngOnInit() {
    
  }
  register(){
    this._ap.register( this.storeRegistrationDetails).subscribe((data)=>{
      alert("registered")
      // this.storeUser=data
    })

  }

}
