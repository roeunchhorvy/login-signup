import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginSignupComponent{

  loginObj: any = {
    "email" : "",
    "password": "",
  };

  signUpObj: any = {
    "email" : "",
    "password": "",
    "fullName": "",
  };

  //constructor(private http: HttpClient, private router: Router) {}
  http = inject(HttpClient);
  constructor(private router: Router){

  }

  onLogin(){
    this.http.post("http://localhost:8181/auth/login", this.loginObj).subscribe((res:any) => {
      if(res){
        alert("Login Success");
        this.router.navigateByUrl("dashboard")
      }else{
        alert("Check username or password")
      }
    });
  }

  onSignup(){
    this.http.post("http://localhost:8181/auth/signup", this.signUpObj).subscribe((res:any) => {
      if(res){
        alert("Signup Success");
      }else{
        alert("Signup failed. Please try again.")
      }
    });
  }
}

