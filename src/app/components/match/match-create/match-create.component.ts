import { MatchService } from './../match.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../match.model';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent implements OnInit {

  match: Match = {
    homeTeam: '',
    awayTeam: '',
    goalsHomeTeam: 0,
    goalsAwayTeam: 0
  }

  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
  }

createMatch(): void {
  this.matchService.create(this.match).subscribe(() => {
    this.matchService.showMessage('Partida criada com sucesso!')
    this.router.navigate(['/matches'])
  })
}
cancel(): void {
  this.router.navigate(['/guesses']);
}
}
