import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  api_league_url: string = "/stats/leaguedashplayerbiostats";
  api_player : string = "/stats/commonplayerinfo";
  
  constructor(private http: HttpClient) {
   }

  getLeagueDashPlayers(perMode = 'Totals', leagueId = '00', season = '2016-17', seasonType = 'Playoffs'): Observable<any> {
    let params = new HttpParams();
        params = params.append('PerMode', perMode);
        params = params.append('LeagueID', leagueId);
        params = params.append('Season', season);
        params = params.append('SeasonType', seasonType);
    return this.http.get(this.api_league_url, {params});
  }
  getCommonPlayer(playerid: number): Observable<any> {
    let params = new HttpParams();
        params = params.append('PlayerID', playerid.toString())
    return this.http.get(this.api_player, {params})
    
  }

}
