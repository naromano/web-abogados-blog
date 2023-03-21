import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { singInModel } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authToken = localStorage.getItem("auth_token")


  constructor (private fb: UntypedFormBuilder, private authSevice: AuthService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.tokenValid()
    }

  myForm: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  tokenValid(){
    if(this.authToken !== null){
      this.router.navigateByUrl(`/panel`);
    }
  }
  singIn(){
    const login: singInModel = {
      email: this.myForm.get("email")?.value,
      password: this.myForm.get("password")?.value
    }
    Swal.showLoading();

    this.authSevice.singIn(login)
    .subscribe(resp => {
      Swal.close();
      const token = resp.token
      if(token !== null){
        window.localStorage.setItem('auth_token', token!)
        this.router.navigateByUrl('/panel');
      }
    },
    error => {
      Swal.fire(error.error.error)
    });

  }
}
