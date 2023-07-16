import {getRndNum, readAnswer, printQuestion, isCorrectAnswer} from '../utilityFuncs.js'

const getGcd = (num1, num2) => {
  let gcd = 1;
  for (let i = Math.min(num1, num2); i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return gcd = i;
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

  if (isCorrect) {
    console.log('Correct!');
    return 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    return 0;
  }
};
