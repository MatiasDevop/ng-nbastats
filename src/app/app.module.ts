import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/nba-players/players-list/players-list.component';
import { PlayerDetailComponent } from './components/nba-players/player-detail/player-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PlayerService } from './components/nba-players/shared/player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
