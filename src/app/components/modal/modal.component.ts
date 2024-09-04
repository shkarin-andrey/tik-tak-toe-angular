import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game';
import { ButtonComponent } from '../button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  readonly #gameService = inject(GameService);

  readonly $gameInfo = this.#gameService.$gameInfo;

  close(): void {
    this.#gameService.reset();
  }
}
