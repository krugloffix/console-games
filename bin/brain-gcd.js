#!/usr/bin/env node

import playGame from '../src/index.js';
import brainGcd from '../src/games/brain-gcd.js';

const gameName = 'Greatest common divisor';
const gameIntro = 'Find the greatest common divisor of given numbers.';

playGame(gameName, gameIntro, brainGcd);
