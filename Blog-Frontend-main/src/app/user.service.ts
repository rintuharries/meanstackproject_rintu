import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  newUser(user:any)
  {
    return this.http.post("http://localhost:8000/signup",user)
    .subscribe(
      res=>
      console.log(res)  

    )

  }
}
