import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Player } from '../shared/player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  playerID: number = 0;
  player: Player;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private webService: PlayerService) {
                this.player= new Player();
               }

  ngOnInit() {
    this.playerID = this.route.snapshot.params['id'];
    if(this.playerID != null){
        this.webService.getCommonPlayer(this.playerID)
        .subscribe(response =>{
          const sets = response.resultSets[0];
          const headers: Array<any> = sets.headers;
          const playerName = headers.indexOf('FIRST_NAME');
          const playerSurname = headers.indexOf('LAST_NAME');
          const playerBirth = headers.indexOf('BIRTHDATE');
          
          const playerInfo= new Player();
          return sets.rowSet.map(i =>{
            playerInfo.name = i[playerName];
            playerInfo.surname = i[playerSurname];
            playerInfo.birth = i[playerBirth];
            this.player = playerInfo;
          })
        },
        error =>{
          console.log('Error', error);
        }
      );
    }
   
   
  }
  gotoPlayers() {
    this.router.navigate(['/players']);
  }
}
