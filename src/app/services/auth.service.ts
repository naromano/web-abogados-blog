import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  singInModel, singUpModel } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = "https://us-central1-blog-agneni-carrazco.cloudfunctions.net/app/";
   url1 = "http://localhost:3000/api/"

  constructor(private http: HttpClient) {
    
   }

   singIn(singIn: singInModel){

    return this.http.post<singInModel>(`${this.url}api/auth/login`, singIn)

   }

   singUp(singUp: singUpModel){

    return this.http.post<singUpModel>(`${this.url}api/auth/register`, singUp)

   }
}
