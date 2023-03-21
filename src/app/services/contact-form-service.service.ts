import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactFormService {


  constructor(private httpClient: HttpClient) { }

  sendForm(form: any): Observable<object> {
    return this.httpClient.post('https://us-central1-blog-agneni-carrazco.cloudfunctions.net/app/envio', form);
  }
}

