import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  singInModel, singUpModel, User } from '../models/auth';

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

   allUsers(){

    return this.http.get(`${this.url}api/auth/allusers`)

   }

   deleteUser(id: string){

    const token = localStorage.getItem('auth_token')
    if(token){
    return this.http.delete(`${this.url}api/auth/user/${id}`,{ headers: {auth_token: token} })
    }
    return null

  }

}
