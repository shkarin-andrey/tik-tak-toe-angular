import { Component } from '@angular/core';
import { GameComponent } from './components/game';
import { ModalComponent } from './components/modal';
import { GameService } from './services/game';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ GameComponent, ModalComponent],
providers: [GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(readonly GameService: GameService) {}

  get gameStatus() {
    return this.GameService.gameStatus
  }
  
  readonly title = 'Крестики нолики';

}
