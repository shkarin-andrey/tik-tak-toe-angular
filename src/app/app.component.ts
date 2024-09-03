import { Component, inject } from '@angular/core';
import { GameComponent } from './components/game';
import { ModalComponent } from './components/modal';
import { GameService } from './services/game';
import { GameStatusType } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent, ModalComponent],
  providers: [GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly #gameService = inject(GameService);

  get gameStatus(): GameStatusType | null {
    return this.#gameService.gameInfo?.status ?? null;
  }

  readonly title: string = 'Крестики нолики';
}
