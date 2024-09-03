import { GameInfoType } from '../types';

export const GAME_INFO: GameInfoType[] = [
  {
    status: 'gameOver',
    title: 'Упс...',
    description: 'Проиграли кажется!',
  },
  {
    status: 'win',
    title: 'Уоу...',
    description: 'Поздравляю, вы победили!',
  },
  {
    status: 'standoff',
    title: 'Ничья...',
    description: 'Пробуем еще разок...',
  },
];
