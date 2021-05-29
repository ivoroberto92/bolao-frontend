import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl = "http://localhost:8080/players"
  baseUrlRanking = "http://localhost:8080/players/ranking"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  create(player: Player): Observable<Player>{
   return this.http.post<Player>(this.baseUrl, player)
  }

  read(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl)
  }
  getRanking(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrlRanking)
  }
}
