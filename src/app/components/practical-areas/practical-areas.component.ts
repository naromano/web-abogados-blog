import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-practical-areas',
  templateUrl: './practical-areas.component.html',
  styleUrls: ['./practical-areas.component.css']
})
export class PracticalAreasComponent implements OnInit {

  mostrarLitigio = false;
  mostrarCivil = false;
  mostrarTrabajo = false;
  mostrarAdmin = false;
  mostrarComercial = false;


  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0, 0);
    });

  }

}
