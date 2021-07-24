import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''
  }
  invalidLogin: boolean=false;
  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
  loginuser()
  {
    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        
        if(res.token){     
          
        localStorage.setItem('token', res.token)  
      
        this.router.navigate(['admin'])
        }
        else if(res.user){
       
          this.router.navigate(['user'])
        }
       
      },
      err => {
        alert("Invalid Login Credentials")
        console.log(err);
        
      }
    ) 
      }
}
