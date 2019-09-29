import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { AppserviceService } from '../service/appservice.service';
import {Router} from '@angular/router'
import { student } from '../studnent';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})

export class InsertStudentComponent implements OnInit {

//  {{registerForm.dirty}}
formDirty:boolean=false;
  s1:student;
  constructor(private _as:AppserviceService,private router: Router) {
    this.s1=new student();
  }
  ngOnInit() {

  }
  m1(formRef: FormGroup){
    alert("form FG")
    this.formDirty = formRef.dirty;
}

  insert(data){
    this._as.insertion(this.s1).subscribe((data)=>{
    this.router.navigate(['/details']);
    })
  }
}
