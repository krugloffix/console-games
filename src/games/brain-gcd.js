import {
  getRndNum, readAnswer, printQuestion, isCorrectAnswer,
} from '../utilityFuncs.js';

const getGcd = (num1, num2) => {
  let gcd = 1;
  for (let i = Math.min(num1, num2); i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      return gcd;
    }
  }

  return gcd;
};

export default () => {
  const num1 = getRndNum(0, 101);
  const num2 = getRndNum(0, 101);

  printQuestion(`${num1} ${num2}`);
  const userAnswer = readAnswer();
  const answer = getGcd(num1, num2);
  const isCorrect = isCorrectAnswer(answer, userAnswer);

  const result = isCorrect ? 1 : 0;

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  }

  return result;
};
