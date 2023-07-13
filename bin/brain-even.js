#!/usr/bin/env node

import brainEven from '../src/games/brain-even.js';
import playerName from './brain-games.js';

console.log('Answer "yes" if the number is even, otherwise answer "no"');

console.log(brainEven() ? `Congrats, ${playerName}!` : `Sorry, ${playerName}, you lost :c`);
