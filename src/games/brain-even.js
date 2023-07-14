import {getRndNum, readAnswer, printQuestion, isCorrectAnswer} from '../utilityFuncs.js'

const isEven = (num) => num % 2 === 0;

export default () => {
  
  const num = getRndNum(0, 101);
  const isNumEven = isEven(num);
  printQuestion(num);
  const userAnswer = readAnswer();
  const isCorrect = isCorrectAnswer(isNumEven ? 'yes' : 'no', userAnswer);

  if (isCorrect) {
    console.log('Correct!');
    return 1;
  } else {
    console.log('Wrong!');
    return 0;
  }

};
