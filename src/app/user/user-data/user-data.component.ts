import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../service/appservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  getUserById:any;
  constructor(private as:AppserviceService,private ar:ActivatedRoute) { }

  ngOnInit() {
    let id=this.ar.snapshot.params['id'];
    this.as.getId(id).subscribe((user)=>{
      console.log(user)
      this.getUserById=user;
    })
  }

}
