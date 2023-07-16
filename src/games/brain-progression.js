import {
  getRndNum, readAnswer, printQuestion, isCorrectAnswer,
} from '../utilityFuncs.js';

export default () => {
  const progressionLength = 10;
  let progressionNum = getRndNum(0, 101);
  const progressionDiff = getRndNum(1, 11);
  const hiddenElem = getRndNum(0, progressionLength);

  const progression = [];
  const question = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionNum += progressionDiff;
    progression.push(progressionNum);
    question.push(progressionNum);
  }

  question[hiddenElem] = '..';

  printQuestion(`${question.join(' ')}`);
  const userAnswer = readAnswer();
  const answer = progression[hiddenElem];

  const isCorrect = isCorrectAnswer(answer, userAnswer);

  const result = isCorrect ? 1 : 0;

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  }

  return result;
};
