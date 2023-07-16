import {getRndNum, readAnswer, printQuestion, isCorrectAnswer} from '../utilityFuncs.js'

const isPrime = (num) => {
  const dividers = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i)
    }
  }

  console.log(dividers)

  return dividers.length === 2;
}


export default () => {

  const num = getRndNum(0, 101);
  printQuestion(`${num}`);
  const userAnswer = readAnswer();
  const answer = isPrime(num) ? 'yes' : 'no';
  const isCorrect = isCorrectAnswer(answer, userAnswer);

  if (isCorrect) {
    console.log('Correct!');
    return 1;
  } else {
    console.log('Wrong!');
    return 0;
  }
};
