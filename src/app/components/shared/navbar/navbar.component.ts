import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authToken = localStorage.getItem("auth_token");
  exist = false;

  constructor() {}
  ngOnInit(): void {
    console.log(this.authToken)
    this.tokenExist()

  }

  tokenExist(){
    if(this.authToken === null){
      this.exist = true;
    }else{
      this.exist = false;
    }
  }


}
