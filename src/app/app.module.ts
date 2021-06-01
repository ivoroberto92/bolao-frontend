import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PlayerCreateComponent } from './components/player/player-create/player-create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { PlayerCrudComponent } from './views/player-crud/player-crud.component';
import { GuessComponent } from './views/guess/guess.component';
import { MatchComponent } from './views/match/match.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { PlayerReadComponent } from './components/player/player-read/player-read.component';
import { GuessCreateComponent } from './components/guess/guess-create/guess-create.component';
import { MatchCreateComponent } from './components/match/match-create/match-create.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { PlayerRankingComponent } from './components/player/player-ranking/player-ranking.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GuessReadComponent } from './components/guess/guess-read/guess-read.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PlayerCrudComponent,
    GuessComponent,
    MatchComponent,
    PlayerCreateComponent,
    PlayerReadComponent,
    GuessCreateComponent,
    MatchCreateComponent,
    PlayerRankingComponent,
    GuessReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
