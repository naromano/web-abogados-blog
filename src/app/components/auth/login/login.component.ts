import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { singInModel } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private fb: UntypedFormBuilder, private authSevice: AuthService) {
    
  }

  myForm: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  singIn(){
    const login: singInModel = {
      email: this.myForm.get("email")?.value,
      password: this.myForm.get("password")?.value
    }

    console.log(login)

    this.authSevice.singIn(login).subscribe(resp =>{
      console.log(resp)
    })

  }
}
