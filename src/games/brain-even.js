import readlineSync from 'readline-sync';
import getRndNum from '../getRndNum.js';

const isEven = (num) => num % 2 === 0;

export default (gamesToPlay) => {
  let countWins = 0;

  for (let i = 0; i < gamesToPlay; i += 1) {
    const num = getRndNum();
    const isNumEven = isEven(num);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isNumEven && userAnswer === 'yes') || (!isNumEven && userAnswer === 'no')) {
      console.log('Correct!');
      countWins += 1;
    } else {
      console.log('Wrong!');
    }
  }

  return countWins;
};
