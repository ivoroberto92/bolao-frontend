import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PlayerCrudComponent } from './views/player-crud/player-crud.component';
import { GuessComponent } from './views/guess/guess.component';
import { MatchComponent } from './views/match/match.component';
import { PlayerCreateComponent } from './components/player/player-create/player-create.component';
import { GuessCreateComponent } from './components/guess/guess-create/guess-create.component';
import { MatchCreateComponent } from './components/match/match-create/match-create.component';
import { PlayerRankingComponent } from './components/player/player-ranking/player-ranking.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "players",
  component: PlayerCrudComponent
}, {
  path: "players/create",
  component: PlayerCreateComponent
}, {
  path: "ranking",
  component: PlayerRankingComponent
}, {
  path: "guesses",
  component: GuessComponent
}, {
  path: "guesses/create",
  component: GuessCreateComponent
}, {
  path: "matches",
  component: MatchComponent
}, {
  path: "matches/create",
  component: MatchCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
