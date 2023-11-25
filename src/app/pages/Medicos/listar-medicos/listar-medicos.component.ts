import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../../services/medicos.service';
import { Medicos } from '../../../Entity/Medicos';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html'
})
export class ListarMedicosComponent implements OnInit {
  
  medicos: Medicos[] = [];

  constructor(private dataService: MedicosService) { }
  
  ngOnInit(): void {
    this.dataService.obtenerMedicos().subscribe(data => {
      this.medicos = data;
    });
  }




}
