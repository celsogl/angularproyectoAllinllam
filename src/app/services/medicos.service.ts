import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicos } from '../Entity/Medicos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private dataURL = 'assets/medicos.json'; // Ruta al archivo JSON
  constructor(private http: HttpClient) { }

  public obtenerMedicos(): Observable<Medicos[]> {
    return this.http.get<Medicos[]>(this.dataURL);
  }
}
