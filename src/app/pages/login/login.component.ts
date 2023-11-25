import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { loginRequest } from '../../services/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{

loginError: string ="";




  loginForm = this.formBuilder.group({
    username:['',Validators.required],
    pass:['',Validators.required],
  })


  constructor(private formBuilder:FormBuilder, private router: Router, private loginService: LoginService ){
  }

  ngOnInit():void{

  }

  get username(){
    return this.loginForm.controls.username;
  }

  get pass(){
    return this.loginForm.controls.pass;
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as loginRequest).subscribe({
        next:(userData)=> {
          console.log(userData);
        },
        error:(errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete:() => {
          console.info("Login completo");
          this.router.navigateByUrl('/');
          this.loginForm.reset();
        }
      })
    }
    else{
      alert("Error al ingresar los datos");
    }
  }
}
