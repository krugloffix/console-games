import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');

  return playerName;
};

export default getPlayerName();
