import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

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
        Swal.fire('Usuario Registrado','Usuario registrado con exito en el sistema','success');
      },(error) => {
        console.log(error);
        Swal.fire('Error','Ha ocurrido un error en el sistema.','error');
      }
    )

  }


}
