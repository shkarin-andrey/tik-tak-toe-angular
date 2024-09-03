import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game';
import { GameStatusType } from '../../types';
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

  get $title(): string {
    return this.#gameService.gameInfo?.title ?? '';
  }

  get $description(): string {
    return this.#gameService.gameInfo?.description ?? '';
  }

  get $gameStatus(): GameStatusType | null {
    return this.#gameService.gameInfo?.status ?? null;
  }

  close(): void {
    this.#gameService.reset();
  }
}
