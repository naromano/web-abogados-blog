import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactFormService {


  constructor(private httpClient: HttpClient) { }

  sendForm(form: any): Observable<object> {
    console.log(form);

    return this.httpClient.post('../../sendEmail.php', form);
  }
}

