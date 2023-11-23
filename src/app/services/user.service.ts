import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../Entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient) { }

  
  
  public saveUsuario(user:any){
    return this.httpClient.post(`${baseUrl}/usuarios/`,user);
  }

  getUser(id:number):Observable<User>{
    return this.httpClient.get<User>(`${baseUrl}/api/v1/user/1`)
  }
  
}


