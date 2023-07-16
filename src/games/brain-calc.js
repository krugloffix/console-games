import {
  getRndNum, readAnswer, printQuestion, isCorrectAnswer,
} from '../utilityFuncs.js';

const getTaskInfo = (operator, num1, num2) => {
  let taskInfo = {};
  switch (operator) {
    case 0:
      taskInfo = { question: `${num1} + ${num2}`, answer: num1 + num2 };
      break;
    case 1:
      taskInfo = { question: `${num1} - ${num2}`, answer: num1 - num2 };
      break;
    case 2:
      taskInfo = { question: `${num1} * ${num2}`, answer: num1 * num2 };
      break;
    default:
      taskInfo = { question: `${num1} + ${num2}`, answer: num1 + num2 };
  }

  return taskInfo;
};

export default () => {
  const num1 = getRndNum(0, 101);
  const num2 = getRndNum(0, 101);
  const operator = getRndNum(0, 3);
  const taskInfo = getTaskInfo(operator, num1, num2);

  printQuestion(taskInfo.question);
  const userAnswer = readAnswer();
  const isCorrect = isCorrectAnswer(taskInfo.answer, userAnswer);

  const result = isCorrect ? 1 : 0;

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${taskInfo.answer}'`);
  }

  return result;
};
