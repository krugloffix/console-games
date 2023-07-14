import {getRndNum, readAnswer, printQuestion, isCorrectAnswer} from '../utilityFuncs.js'

export default () => {
  const progressionLength = 10;
  let progressionNum = getRndNum(0, 101);
  const progressionDiff = getRndNum(0, 11);
  const hiddenElem = getRndNum(0, progressionLength);

  const progression = [];
  const question = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionNum += progressionDiff;
    progression.push(progressionNum);
    question.push(progressionNum);
  }

  question[hiddenElem] = '..';

  printQuestion(`${question}`);
  const userAnswer = readAnswer();
  const answer = progression[hiddenElem];

  const isCorrect = isCorrectAnswer(answer, userAnswer);

  if (isCorrect) {
    console.log('Correct!');
    return 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    return 0;
  }

};
