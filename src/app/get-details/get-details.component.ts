import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  storingData
  departmentId;
  errorMessage: boolean = false;
  storeId;
  isNotClick: boolean = true;
  isClicked: boolean = false

  constructor(private as: AppserviceService, private ar: ActivatedRoute, private _router: Router) {
    this.as.getData().subscribe((data) => {
      this.storingData = data;
      for (let entry of this.storingData) {
        let retrieveId = entry.id
        console.log(retrieveId)
        // alert(retrieveId)
        this.storeId = retrieveId;
      }
    }, (err) => {
      this.errorMessage = true;
    })
  }

  getData() {
    this.as.getData().subscribe((data) => {
      this.storingData = data;
      this.isNotClick = true;
      this.isClicked = false;

    })
  }
  updateData(data) {
    this.isNotClick = false;
    if (data) {
      this.isClicked = true;
      data;
      alert("id is "+data)
    }
  }

  save(data) {
    this.as.updateService(data).subscribe((data) => {
      // this.getData();
      alert("stored");
      this.isNotClick = true;
      this.isClicked = false;
    })
  }

  deleteRecord(id) {
    //alert(id)
    this.as.deleteId(id).subscribe((data) => {
      // this._router.navigate(['/details'])
      this.getData()
      //alert( this.getData())

      //alert("deleted")




      //alert("deleted " + this.storeId)
    })
  }

  ngOnInit() {
    // let id=parseInt(this.ar.snapshot.params['id'])
    // this.as.getId(id).subscribe((user)=>{
    //   console.log(user)
    //   this.departmentId=user.id
    //   alert(user.id);

    // })

  }
}
