import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../Entity/Paciente';
import { PacienteService } from '../../../services/paciente.service';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html'
})
export class ListarPacienteComponent implements OnInit {
 
  pacientes: Paciente[] =[];

  constructor(private dataService: PacienteService) { }
 
  ngOnInit(): void {
    this.dataService.obtenerPaciente().subscribe(data => {
      this.pacientes = data;
    });
  }
}
