import {
  getRndNum, readAnswer, printQuestion, isCorrectAnswer,
} from '../utilityFuncs.js';

const isPrime = (num) => {
  const dividers = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }

  return dividers.length === 2;
};

export default () => {
  const num = getRndNum(0, 101);
  printQuestion(`${num}`);
  const userAnswer = readAnswer();
  const answer = isPrime(num) ? 'yes' : 'no';
  const isCorrect = isCorrectAnswer(answer, userAnswer);

  const result = isCorrect ? 1 : 0;

  if (result) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  return result;
};
