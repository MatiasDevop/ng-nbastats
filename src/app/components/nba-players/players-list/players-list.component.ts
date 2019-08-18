import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { JsonPipe } from '@angular/common';
import { Player } from '../shared/player.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: any[] = [];
  constructor(private webService: PlayerService) { }

  ngOnInit() {

      this.webService.getLeagueDashPlayers()
        .subscribe((response: any) => {
          const sets = response.resultSets[0];
            const headers: Array<any> = sets.headers;
              const playerIdIndex = headers.indexOf('PLAYER_ID');
                const playerNameIndex = headers.indexOf('PLAYER_NAME');
                const playerAgeIndex = headers.indexOf('AGE');
                const playerTeam = headers.indexOf('TEAM_ABBREVIATION');

               return sets.rowSet.map(i =>{
                const playerInfo = new Player();
                playerInfo.id = i[playerIdIndex];
                playerInfo.name = i[playerNameIndex].split(" ")[0];
                playerInfo.surname = i[playerNameIndex].split(" ")[1];
                playerInfo.age = i[playerAgeIndex];
                playerInfo.equipment = i[playerTeam];
                this.players.push(playerInfo) ;
              })
          },
          error =>{
            console.log('Error', error);
          }
        );
  }

}
