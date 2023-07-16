#!/usr/bin/env node

import playGame from '../src/index.js'; 
import brainPrime from '../src/games/brain-prime.js';

const gameName = 'Is prime number?'
const gameIntro = 'Answer "yes" if given number is prime. Othewise answer "no".';

playGame(gameName, gameIntro, brainPrime);
