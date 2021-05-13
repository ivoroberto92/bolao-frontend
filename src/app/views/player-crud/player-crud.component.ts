import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-player-crud',
  templateUrl: './player-crud.component.html',
  styleUrls: ['./player-crud.component.css']
})
export class PlayerCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPlayerCreate(): void {
   this.router.navigate(['/players/create']);
  }
}
