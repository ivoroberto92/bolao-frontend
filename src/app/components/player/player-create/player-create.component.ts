import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';


@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  player: Player = {
    name: '',
    score: 0,
    teamName: '',
    status: ''
  }

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {

  }
  createPlayer(): void {
    this.playerService.create(this.player).subscribe(() => {
      this.playerService.showMessage('Jogador criado!');
      this.router.navigate(['/players']);
    })
  }
  cancel(): void {
    this.router.navigate(['/players']);
  }
}
