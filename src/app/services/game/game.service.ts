import { Injectable, signal } from '@angular/core';
import { DEFAULT_GAME_FIELDS, GAME_INFO, WIN_ARRAY } from '../../constants';
import { OptionMovie } from '../../enums';
import { GameInfoType } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly #gameFieldSignal = signal<(OptionMovie | null)[]>([
    ...DEFAULT_GAME_FIELDS,
  ]);
  readonly #gameInfoSignal = signal<GameInfoType | null>(null);
  private winResultCircle = JSON.stringify(Array(3).fill(OptionMovie.CIRCLE));
  private winResultCross = JSON.stringify(Array(3).fill(OptionMovie.CROSS));

  readonly $gameInfo = this.#gameInfoSignal.asReadonly();
  readonly $gameField = this.#gameFieldSignal.asReadonly();

  get #gameInfo(): GameInfoType | null {
    return this.#gameInfoSignal();
  }

  get #gameField(): (OptionMovie | null)[] {
    return this.#gameFieldSignal();
  }

  public reset(): void {
    this.#gameFieldSignal.set([...DEFAULT_GAME_FIELDS]);
    this.#gameInfoSignal.set(null);
  }

  public updatePersonItem(index: number): void {
    const currentGamePoint = this.#gameField[index];

    if (
      currentGamePoint === OptionMovie.CIRCLE ||
      currentGamePoint === OptionMovie.CROSS
    ) {
      return;
    }

    this.#gameFieldSignal.update((prev) => {
      prev.splice(index, 1, OptionMovie.CROSS);

      return prev;
    });
    this.#checkGameStatus();
    this.#updateComputerItem();
  }

  #updateComputerItem(): void {
    if (this.#gameInfo) return;

    const gameFieldLength: number = this.#gameField.length - 1;
    const random: number = Math.ceil(Math.random() * gameFieldLength);
    const gameRandom: string | null = this.#gameField[random];

    if (gameRandom === OptionMovie.CIRCLE || gameRandom === OptionMovie.CROSS) {
      this.#updateComputerItem();
    } else {
      this.#gameFieldSignal.update((prev) => {
        prev.splice(random, 1, OptionMovie.CIRCLE);
        return prev;
      });
      this.#checkGameStatus();
    }
  }

  #resultFieldGame(x: number[]): string {
    const resultFieldGame = JSON.stringify([
      this.#gameField[x[0]],
      this.#gameField[x[1]],
      this.#gameField[x[2]],
    ]);

    return resultFieldGame;
  }

  #checkGameStatus(): void {
    WIN_ARRAY.forEach((x: number[]) => {
      const resultFieldGame = this.#resultFieldGame(x);

      if (resultFieldGame === this.winResultCircle) {
        this.#setGameInfo(GAME_INFO[0]);
        return;
      }

      if (resultFieldGame === this.winResultCross) {
        this.#setGameInfo(GAME_INFO[1]);
        return;
      }

      if (this.#gameField.every(Boolean)) {
        this.#setGameInfo(GAME_INFO[2]);
        return;
      }
    });
  }

  #setGameInfo(gameInfo: GameInfoType | null): void {
    this.#gameInfoSignal.set(gameInfo);
  }
}
