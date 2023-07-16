#!/usr/bin/env node

import playGame from '../src/index.js';
import brainCalc from '../src/games/brain-calc.js';

const gameName = 'Brain calculator';
const gameIntro = 'What is the result of the expression?';

playGame(gameName, gameIntro, brainCalc);
