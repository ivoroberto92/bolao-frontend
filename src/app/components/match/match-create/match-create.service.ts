import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../team/team.model';

@Injectable({
  providedIn: 'root'
})
export class MatchCreateService {
 baseUrl = 'http://localhost:8080/teams'
  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl)
  }
}
