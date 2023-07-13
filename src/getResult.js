import playerName from "../bin/brain-games.js";

const getResult = (correctAnswers, answersToWin) => correctAnswers === answersToWin ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`;

export default getResult;
