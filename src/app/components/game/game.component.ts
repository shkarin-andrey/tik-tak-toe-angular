import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  readonly #gameService = inject(GameService);

  readonly $gameField = this.#gameService.$gameField;

  updatePersonItem(index: number): void {
    this.#gameService.updatePersonItem(index);
  }
}
