import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';
import { student } from '../studnent';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
   
  s1:student;

  constructor(private as:AppserviceService) {
    this.s1=new student();
   }

  ngOnInit() {
  }
  deleteId(){
    this.as.deleted(this.s1).subscribe((data)=>{
      alert("success")

    })
  }

}
