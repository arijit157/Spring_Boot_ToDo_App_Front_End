import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  isLoggedIn: boolean=false;
  showSignupForm: boolean=false;
  showLoginForm: boolean=true;

  displaySignupForm(){
    this.showLoginForm=false;
    this.showSignupForm=true;
  }

  displayLoginForm(){
    this.showLoginForm=true;
    this.showSignupForm=false;
  }

  handleSignup(data: any){
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  }

  handleLogin(data: any){
    console.log(data);
    this.isLoggedIn=this.loginService.login(data);

    if(this.isLoggedIn){
      this.router.navigate(["home"]);
    }
    else{
      this.router.navigate([""]);
    }
  }
}
