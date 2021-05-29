import { Team } from './../../team/team.model';

import { MatchService } from './../match.service';
import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core'
import { Match } from '../match.model';
import { FormControl, Validators } from '@angular/forms';
import { MatchCreateService } from './match-create.service';
import { templateSourceUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent implements OnInit {


  teams: Team[] = [];

  selectedAwayTeam = this.teams[1];
  selectedHomeTeam = this.teams[0];
  match: Match = {
    homeTeam: '',
    awayTeam: '',
    goalsHomeTeam: 0,
    goalsAwayTeam: 0
  }
  /*logo: Blob[] = this.teams[1].logo;*/
  pathLogoHome: string = '';
  pathLogoAway: string = '';
  constructor(private matchService: MatchService, private router: Router,
    private matchCreateService: MatchCreateService) { }

  ngOnInit(): void {
    this.getTeams();
  }
  getTeams() {
    this.matchCreateService.getTeams().subscribe(teams => {
      this.teams = teams;
    })
  }
  createMatch(): void {
    this.match = this.getPathLogoHome(this.match.homeTeam);
    debugger;
    console.log("novo match " + this.match.homeTeam)
    this.getPathLogoAway(this.match.awayTeam);
    console.log(this.match)
    this.matchService.create(this.match).subscribe(() => {

      this.matchService.showMessage('Partida criada com sucesso!')
      this.router.navigate(['/matches'])
    })
  }

  cancel(): void {
    this.router.navigate(['/matches']);
  }

  getPathLogoHome(pathLogo: string): any {
    this.pathLogoHome = pathLogo
    for (var i = 0; i < this.teams.length; i++) {
      if (this.pathLogoHome === this.teams[i].pathLogo) {
        this.match.homeTeam = this.teams[i].name;
        return this.match;
      }
    }
    console.log("home team" + this.match.homeTeam)
 
  }
  getPathLogoAway(pathLogo: string): any {
    this.pathLogoAway = pathLogo
    debugger;
    for (let i = 0; i < this.teams.length; i++) {
      if (this.pathLogoAway === this.teams[i].pathLogo) {
        this.match.awayTeam = this.teams[i].name;
        return this.match;
      }
    }
  }

}
