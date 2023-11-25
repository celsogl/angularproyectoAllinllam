import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicamentos } from '../Entity/Medicamentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  private dataURL = 'assets/medicamentos.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }

  public obtenerMedicamentos(): Observable<Medicamentos[]> {
    return this.http.get<Medicamentos[]>(this.dataURL);
  }
  
}
