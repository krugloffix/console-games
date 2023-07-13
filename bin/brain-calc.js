#!/usr/bin/env node

import brainCalc from "../src/games/brain-calc.js";
import getResult from "../src/getResult.js";

console.log('What is the result of the expression?');
const gamesToPlay = 3;
const correctAnswers = brainCalc(gamesToPlay);
console.log(getResult(correctAnswers, gamesToPlay));