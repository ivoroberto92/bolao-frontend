import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Guess } from '../guess.model';
import { GuessService } from '../guess.service';

@Component({
  selector: 'app-guess-create',
  templateUrl: './guess-create.component.html',
  styleUrls: ['./guess-create.component.css']
})
export class GuessCreateComponent implements OnInit {

  guess: Guess = {
    playerName: '',
    homeTeam: '',
    awayTeam: '',
    goalsHomeTeam: 0,
    goalsAwayTeam: 0
  }
  constructor(private guessService: GuessService, private router: Router) { }

  ngOnInit(): void {
  }

  createGuess(): void {
    this.guessService.create(this.guess).subscribe(() => {
    this.guessService.showMessage('Partida criada com sucesso!')
    this.router.navigate(['/guesses'])
    })
  }
  cancel(): void {
    this.router.navigate(['/guesses']);
  }
  
}
