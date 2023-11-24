import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoSangre } from '../Entity/tipoSangre';

@Injectable({
  providedIn: 'root'
})
export class TiposangreService {

  private dataURL = 'assets/tiposangre.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }
 
  public obtenerTiposDeSangre(): Observable<TipoSangre[]> {
    return this.http.get<TipoSangre[]>(this.dataURL);
  }
}
