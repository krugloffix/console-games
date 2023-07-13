import readlineSync from 'readline-sync';
import getRndNum from '../getRndNum.js';

const getTaskInfo = (operator, num1, num2) => {
  switch (operator) {
    case 0: 
      return {question: `${num1} + ${num2}`, answer: num1 + num2};
    case 1: 
      return {question: `${num1} - ${num2}`, answer: num1 - num2};
    case 2: 
      return {question: `${num1} * ${num2}`, answer: num1 * num2};
  }
};

export default (gamesToPlay) => {
  let countWins = 0;

  for (let i = 0; i < gamesToPlay; i += 1) {
    const num1 = getRndNum(0, 101); 
    const num2 = getRndNum(0, 101);
    const operator = getRndNum(0, 3);
    const taskInfo = getTaskInfo(operator, num1, num2);

    console.log(`Question: ${taskInfo.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if( userAnswer == taskInfo.answer) {
      console.log('Correct!');
      countWins += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${taskInfo.answer}'`)
    }
  }

  return countWins;

};
