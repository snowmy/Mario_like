import { Injectable } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT } from './gamestate.service';


@Injectable({
  providedIn: 'root'
})
export class GameloopService {

public move: boolean



  constructor(public gameService : GamestateService) { }

  start(){
    
    if ((this.gameService.move === MOVE_RIGHT)||(this.gameService.move === MOVE_LEFT)){
     this.move = true
    }
    else{
      this.move = false
    }


  }
refresh(){
  return this.move
}
}
