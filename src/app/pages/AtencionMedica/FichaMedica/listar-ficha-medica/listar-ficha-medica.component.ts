import { Component, OnInit } from '@angular/core';
import { FichaMedica } from '../../../../Entity/FichaMedica';
import { FichamedicaService } from '../../../../services/fichamedica.service';

@Component({
  selector: 'app-listar-ficha-medica',
  templateUrl: './listar-ficha-medica.component.html'
})
export class ListarFichaMedicaComponent implements OnInit{

  fichamedica: FichaMedica[] = [];

  constructor(private dataService: FichamedicaService) { }

  ngOnInit(): void {
    this.dataService.obtenerFichaMedica().subscribe(data => {
      this.fichamedica = data;
    });
  }

}
