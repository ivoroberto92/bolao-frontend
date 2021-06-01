import { GuessService } from './../guess.service';
import { Component, OnInit } from '@angular/core';
import { Guess } from '../guess.model';


@Component({
  selector: 'app-guess-read',
  templateUrl: './guess-read.component.html',
  styleUrls: ['./guess-read.component.css']
})
export class GuessReadComponent implements OnInit {

  guessesByDate?: any
  constructor(private guessService: GuessService) { }

  ngOnInit(): void {
    this.guessesByDate.forEach((value: string, key: string) => {
      console.log(key, value);
    this.guessService.read().subscribe(guesses => {
      this.guessesByDate = Array.from(guesses);
     console.log("Grouping" , this.guessesByDate);
     
  });
    })
  }

}
