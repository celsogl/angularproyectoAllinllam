import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Entity/Usuario';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html'
})
export class ListarUsuariosComponent implements OnInit{
    
    usuarios: Usuario[] = [];

    constructor(private dataService: UserService) { }
    
    ngOnInit(): void {
      this.dataService.obtenerUsuarios().subscribe(data => {
        this.usuarios = data;
      });
    }
}
