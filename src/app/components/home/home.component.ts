import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrarLitigio = false;
  mostrarCivil = false;
  mostrarTrabajo = false;
  mostrarAdmin = false;
  mostrarComercial = false;
  mostrarFamilia = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) =>{
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}
