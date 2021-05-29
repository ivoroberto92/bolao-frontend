import { PlayerService } from './../player.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css']
})
export class PlayerRankingComponent implements OnInit {
  displayedColumns = ['position', 'name', 'score', 'guessRight', 'guessError'];
  players!: Player[];

  constructor(private playerService: PlayerService) {
   }

  ngOnInit(): void {
    this.playerService.getRanking().subscribe(players => {
      this.players = players
      console.log(this.players)
    })
  }

}
