import playerName from '../bin/brain-games.js';
import { getResult } from './utilityFuncs.js';

const playGame = (gameName, gameIntro, gameFunc) => {
  const roundsToPlay = 3;
  let wins = 0;

  // console.log(`Let's start game ${gameName}!`);
  console.log(gameIntro);

  for (let i = 0; i < roundsToPlay; i += 1) {
    const result = gameFunc();
    if (result === 0) {
      break;
    } else {
      wins += 1;
    }
  }

  console.log(getResult(wins, roundsToPlay, playerName));
};

export default playGame;
