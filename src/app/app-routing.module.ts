import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './components/nba-players/players-list/players-list.component';
import { PlayerDetailComponent } from './components/nba-players/player-detail/player-detail.component';


const routes: Routes = [
  { path:'players', component: PlayersListComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  {
    path: '**',
    redirectTo: '/players',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
