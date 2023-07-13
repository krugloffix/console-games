#!/usr/bin/env node

import brainEven from '../src/games/brain-even.js';
import getResult from '../src/getResult.js';

console.log('Answer "yes" if the number is even, otherwise answer "no"');
const gamesToPlay = 3;
const correctAnswers = brainEven(gamesToPlay);
console.log(getResult(correctAnswers, gamesToPlay));
