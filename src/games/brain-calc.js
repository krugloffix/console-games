import {getRndNum, readAnswer, printQuestion, isCorrectAnswer} from '../utilityFuncs.js'

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

export default () => {

    const num1 = getRndNum(0, 101); 
    const num2 = getRndNum(0, 101);
    const operator = getRndNum(0, 3);
    const taskInfo = getTaskInfo(operator, num1, num2);

    printQuestion(taskInfo.question);
    const userAnswer = readAnswer();
    const isCorrect = isCorrectAnswer(taskInfo.answer, userAnswer)

    if (isCorrect) {
      console.log('Correct!');
      return 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${taskInfo.answer}'`);
      return 0;
    }
};
