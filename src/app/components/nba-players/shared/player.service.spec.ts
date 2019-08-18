import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlayerService } from './player.service';
import { HttpClientModule, HttpParams } from '@angular/common/http';

describe('PlayerService', () => {
  // We declare the variables that we'll use for the Test Controller and for our Service
  let injector: TestBed;
  let service: PlayerService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[
          PlayerService
        ]
    });
 
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PlayerService);
      
    });
    afterEach(() => {
      httpTestingController.verify();
    });
    
  it('should retrieve a player by id',() => {

    service.getCommonPlayer(201166)
            .subscribe(data =>{
              expect(data.resultSets[0].rowSet.length).toEqual(1);
            });
  });
  it('should retrieve league of players',() => {

    service.getLeagueDashPlayers()
            .subscribe(data =>{
              expect(data.resultSets[0].rowSet.length).toEqual(215);
            });
  });
 
});
