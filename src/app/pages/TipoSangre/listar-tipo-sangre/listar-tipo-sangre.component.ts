import { Component, OnInit } from '@angular/core';
import { TipoSangre } from '../../../Entity/tipoSangre';
import { TiposangreService } from '../../../services/tiposangre.service';

@Component({
  selector: 'app-listar-tipo-sangre',
  templateUrl: './listar-tipo-sangre.component.html'
})
export class ListarTipoSangreComponent implements OnInit {


  tiposDeSangre: TipoSangre[] = [];

  constructor(private dataService: TiposangreService) { }
 
 
  ngOnInit(): void {
    this.dataService.obtenerTiposDeSangre().subscribe(data => {
      this.tiposDeSangre = data;
    });
  }

}
