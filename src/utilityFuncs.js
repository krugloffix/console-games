import readlineSync from 'readline-sync';

const getRndNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const readAnswer = () => readlineSync.question('Your answer: ');

const printQuestion = (question) => console.log(`Question: ${question}`);

const isCorrectAnswer = (userAnswer, correctAnswer) => {
  const result = userAnswer.toString() === correctAnswer.toString();

  return result;
};

const getResult = (correctAnswers, answersToWin, playerName) => {
  const result = correctAnswers === answersToWin ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`;

  return result;
};

export {
  getRndNum, readAnswer, printQuestion, isCorrectAnswer, getResult,
};
