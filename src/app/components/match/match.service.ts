import { Team } from './../team/team.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from './match.model';
import { MatchCreateComponent } from './match-create/match-create.component';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  baseUrl = 'http://localhost:8080/matches'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
 
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  create(match: Match): Observable<Match> {
    debugger;
    return this.http.post<Match>(this.baseUrl, match)
  }


}

