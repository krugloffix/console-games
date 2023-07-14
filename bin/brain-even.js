#!/usr/bin/env node

import playGame from '../src/index.js'; 
import brainEven from '../src/games/brain-even.js'

const gameName = 'Parity check'
const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no"';

playGame(gameName, gameIntro, brainEven);
