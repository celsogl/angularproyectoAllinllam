import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../Entity/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  
  userLoginOn:boolean=false;

  constructor(private loginService: LoginService ){}
  
  ngOnDestroy(): void {
  this.loginService.currentUserData.unsubscribe();
  this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
   this.loginService.currentUserLoginOn.subscribe({
    next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
    }
   });
  }

  

}
