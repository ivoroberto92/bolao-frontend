import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guess } from './guess.model';

@Injectable({
  providedIn: 'root'
})
export class GuessService {

  baseUrl = 'http://localhost:8080/guesses'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(guess: Guess): Observable<Guess> {
    return this.http.post<Guess>(this.baseUrl, guess)
  }

}
