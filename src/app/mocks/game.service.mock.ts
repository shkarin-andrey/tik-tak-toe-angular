import { signal } from '@angular/core';
import { DEFAULT_GAME_FIELDS } from '../constants';
import { OptionMovie } from '../enums';

export class GameServiceMock {
  public gameField: (OptionMovie | null)[] = [...DEFAULT_GAME_FIELDS];
  public $gameInfo = signal(null);

  public reset(): void {}

  public updatePersonItem(): void {}
}
