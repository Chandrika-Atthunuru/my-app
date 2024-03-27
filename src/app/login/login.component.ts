import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _loginService:LoginService , private _router:Router){}
  public Loginform:FormGroup=new FormGroup(
    {
     email: new FormControl(),
     password:new FormControl()
    }
  )
  
  onsubmit(){
  console.log(this.Loginform.value);
  this._loginService.createlogin(this.Loginform.value).subscribe(
    (data:any)=>{
      // storing token
      localStorage.setItem("my-app-token",data.token);
      // go to dashboard
      this._router.navigateByUrl("/dashboard");
      alert("created successfully");
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
  }
  

}

