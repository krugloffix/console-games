import readlineSync from 'readline-sync';

const getRndNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const readAnswer = () => readlineSync.question('Your answer: ');

const printQuestion = (question) => console.log(`Question: ${question}`);

const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer == correctAnswer;

const getResult = (correctAnswers, answersToWin, playerName) => {
  correctAnswers === answersToWin ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`;
};

export {
  getRndNum, readAnswer, printQuestion, isCorrectAnswer, getResult,
};
