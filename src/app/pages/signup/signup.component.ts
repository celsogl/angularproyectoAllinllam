import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  

 
 public user = {
  usuario : '',
  pass: ''
 }

 constructor ( private userService: UserService){}

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.usuario==''|| this.user.usuario == null){
      alert('El nombre de usuario es requerido.');
      return;
    }

    this.userService.saveUsuario(this.user).subscribe(
      (data) => {
        console.log(data)
        alert('Usuario guardado con éxito.');
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema.')
      }
    )

  }


}
