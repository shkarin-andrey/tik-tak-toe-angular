import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../../services/game';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  constructor(readonly GameService: GameService){}
  
  get gameList() {
    return this.GameService.gameList
  }
}
