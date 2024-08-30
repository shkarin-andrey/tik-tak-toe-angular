import { Component } from '@angular/core';
import { GameService } from '../../services/game';
import { ButtonComponent } from '../button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(readonly GameService: GameService) {}

  get title() {
    return this.GameService.title
  }

  get text() {
    return this.GameService.text
  }

  get gameStatus() {
    return this.GameService.gameStatus
  }

  close() {
    this.GameService.reset()
  }
}
