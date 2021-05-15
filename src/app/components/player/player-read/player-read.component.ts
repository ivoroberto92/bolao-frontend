import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-read',
  templateUrl: './player-read.component.html',
  styleUrls: ['./player-read.component.css']
})
export class PlayerReadComponent implements OnInit {

  players?: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.read().subscribe(players => {
      this.players = players
      console.log(this.players)
    })
  }

}
