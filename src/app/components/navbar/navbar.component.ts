import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedInNavbar: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.isUserLoggedIn.subscribe((isTrue) => {
      if(isTrue){
        this.isLoggedInNavbar=true;
      }
      else if(localStorage.getItem("userLoginInfo")){
        this.isLoggedInNavbar=true;
      }
      else{
        this.isLoggedInNavbar=false;
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem("userLoginInfo")){
      this.isLoggedInNavbar=true;
    }
  }

  handleLogout() {
    localStorage.removeItem("userLoginInfo");
    this.isLoggedInNavbar = false;
    this.router.navigate([""]);
  }
}
