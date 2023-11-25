import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FichaMedica } from '../Entity/FichaMedica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichamedicaService {

  private dataURL = 'assets/fichamedica.json'; // Ruta al archivo JSON


  constructor(private http: HttpClient) { }

  public obtenerFichaMedica(): Observable<FichaMedica[]> {
    return this.http.get<FichaMedica[]>(this.dataURL);
  }

}
