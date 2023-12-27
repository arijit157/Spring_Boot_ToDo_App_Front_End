import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // message=new BehaviorSubject<boolean>(false);
  isLoggedIn=new BehaviorSubject<boolean>(false);
  isLoggedInNavbar: boolean=false;
  isUserLoggedIn=new EventEmitter<boolean>(false);
  // getMessage=this.message.asObservable();

  // setMessage(message: boolean){
  //   this.message.next(message);
  // }

  login(data: any): boolean{
    let userInfo=localStorage.getItem("user");
    let parsedUserInfo=userInfo && JSON.parse(userInfo);
    if(data.email === parsedUserInfo.email && data.password === parsedUserInfo.password){
      localStorage.setItem("userLoginInfo", JSON.stringify(data));
      this.isLoggedIn.next(true);
      this.isUserLoggedIn.emit(true);
      return true;
    }
    else{
      this.isUserLoggedIn.emit(false);
      return false;
    }
  }
}
