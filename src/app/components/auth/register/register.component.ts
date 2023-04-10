import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { singUpModel } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authToken = localStorage.getItem("auth_token")
  constructor(private fb: UntypedFormBuilder, private authSevice: AuthService, private router: Router, private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.tokenValid()
  }

  myForm: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],

  })

  singUp(){
    if(this.myForm.valid){
      const register: singUpModel = {
        email: this.myForm.get("email")?.value,
        password: this.myForm.get("password")?.value,
        name: this.myForm.get("name")?.value,
      }
      this.spinner.show()
      this.authSevice.singUp(register).subscribe(r => {
        console.log(r)
        this.spinner.hide()
        window.alert("Usuario Registrado")
        this.router.navigateByUrl('/panel');
      })
    }else{
      window.alert("Faltan ingresar datos")
    }
  }

  back(){
    this.router.navigateByUrl('/panel');
  }

  tokenValid(){
    if(this.authToken === null){
      this.router.navigateByUrl(`/`);
    }
  }

}
