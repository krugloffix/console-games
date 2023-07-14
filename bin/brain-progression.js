#!/usr/bin/env node

import brainProgression from '../src/games/brain-progression.js';
import playGame from '../src/index.js';

const gameName = 'Arithmetic progression'
const gameIntro = 'What number is missing in the progression?';

playGame(gameName, gameIntro, brainProgression);