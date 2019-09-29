import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';



// import { student } from '../studnent';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  url:string="http://localhost:3000/students"

  constructor(private _http:HttpClient) { }
  insertion(data){
   
    return this._http.post(this.url,data)
  }
  // getData():Observable<student[]>{
  //   return this._http.get<student[]>(this.url)
  //             .catch(this.errorHandler)
  // }
  getData(){
      return this._http.get(this.url)
               
    }
  errorHandler(error:HttpErrorResponse){

  }
  deleted(data){
    return this._http.delete(this.url+"/"+data.id)
  }
  getId(id:number){
    return this._http.get("http://localhost:3000/students/"+id)

  }
  deleteId(id):Observable<any>{
    return this._http.delete<any>(this.url+"/"+id)
    //.pipe(map
    // (res=>
    //   {
    //     alert(res)
    //     console.log(res)
    //     return res.json()

    //   })
   // )

  }
  updateService(data){
    return this._http.put(this.url+"/"+data.id,data)
  }
  register(data){
    return this._http.post("http://localhost:3000/register",data);
  }
  getUserPassword(user,password){
    return this._http.get("http://localhost:3000/register")

  }
}

