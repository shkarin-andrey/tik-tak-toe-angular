import { Injectable } from '@angular/core';
import { GameStatusType } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor() {}

  public gameList = Array(9).fill(null);
  public gameStatus: GameStatusType | null = null
  public text = ''
  public title = ''


  private PARAMS = {
    circle: "♺",
    cross: "✘",
  };

  private win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  reset = () => {
    this.gameList = Array(9).fill(null);
    this.gameStatus = null
    this.text = '1'
    this.title = '2'
  }

  public updatePersonItem(index: number) {
    const currentGame = this.gameList[index];

    if (currentGame === this.PARAMS.circle || currentGame === this.PARAMS.cross)  return 
      this.gameList.splice(index, 1, this.PARAMS.cross);
      this.#isWin();

    this.#updateComputerItem()
  };

  #updateComputerItem() {
    if (!!this.gameStatus) return 
    const random = Math.ceil(Math.random() * (this.gameList.length - 1));
    const gameRandom: string = this.gameList[random]

    if (
      gameRandom === this.PARAMS.circle ||
      gameRandom === this.PARAMS.cross
    ) {
      this.#updateComputerItem();
    } else {
      this.gameList.splice(random, 1, this.PARAMS.circle);
      this.#isWin();
    }
  };

   #isWin() {
    this.win.forEach((x:number[]) => {
      const testGridGame = JSON.stringify([
        this.gameList[x[0]],
        this.gameList[x[1]],
        this.gameList[x[2]],
      ]);
      const testResultCircle = JSON.stringify(Array(3).fill(this.PARAMS.circle));
      const testResultCross = JSON.stringify(Array(3).fill(this.PARAMS.cross));

      if (testGridGame === testResultCircle) {
        this.gameStatus = 'gameOver'
        this.title = 'Упс...'
        this.text = "Проиграли кажется!"
        
        return
      }

      if (testGridGame === testResultCross) {
        this.gameStatus = 'win'
        this.title = 'Уоу...'
        this.text = "Поздравляю, вы победили!"
        
        return
      }

      if (this.gameList.every((x) => x !== null)) {
        this.gameStatus = 'standoff'
        this.title = 'Ничья...'
        this.text = "Пробуем еще разок..."
        
        return 
      }
    });
  };
}
