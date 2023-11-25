import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../Entity/Paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private dataURL = 'assets/paciente.json'; // Ruta al archivo JSON
  
  constructor(private http: HttpClient) { }


  public obtenerPaciente(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.dataURL);
  }
}
