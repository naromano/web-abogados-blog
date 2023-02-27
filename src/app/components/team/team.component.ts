import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Lawyer } from 'src/app/services/interface.laywer';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

lawyers: Lawyer[] = [];

  constructor(private _teamService: TeamService,
              private router: Router

    ) { }

  ngOnInit() {

this.lawyers = this._teamService.getLawyer();

this.router.events.subscribe((evt) => {
  if (!(evt instanceof NavigationEnd)){
    return;
  }
  window.scrollTo(0, 0);
});

  }

}
