import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../../../Entity/Medicamentos';
import { MedicamentosService } from '../../../services/medicamentos.service';

@Component({
  selector: 'app-listar-medicamentos',
  templateUrl: './listar-medicamentos.component.html'
})
export class ListarMedicamentosComponent implements OnInit {


  

medicamento: Medicamentos[] =[];

constructor(private dataService: MedicamentosService) { }

ngOnInit(): void {
  this.dataService.obtenerMedicamentos().subscribe(data => {
    this.medicamento = data;
  });
}

}
