import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable} from 'rxjs';
import { User } from '../Entity/user';
import { Usuario } from '../Entity/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  
  private dataURL = 'assets/usuario.json'; // Ruta al archivo JSON
  
  
  constructor( private httpClient: HttpClient) { }

 
  
  public saveUsuario(user:any){
    return this.httpClient.post(`${baseUrl}/auth/signup/`,user);
  }

  getUser(id:number):Observable<User>{
    return this.httpClient.get<User>(`${baseUrl}/api/v1/user/1`)
  }


  public obtenerUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.dataURL);
  }
  
}


