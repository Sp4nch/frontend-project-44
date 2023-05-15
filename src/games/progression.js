import commonLogic from '../index.js';
import getRandomInRange from '../helpers/random-number.js';

const gameIntro = 'What number is missing in the progression?';

const makeProgression = (length) => {
  const numberOne = getRandomInRange(1, 100);
  const increaseNuber = getRandomInRange(1, 100);

  const collNumbers = [numberOne];
  for (let i = 1; i < length; i += 1) {
    collNumbers.push(numberOne + increaseNuber * i);
  }
  return collNumbers;
};

const gameProgLogic = () => {
  const progression = makeProgression(7);
  const missingNumber = getRandomInRange(0, progression.length - 1);
  const rightAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  return ([progression.join(' '), rightAnswer]);
};

export default () => commonLogic(gameIntro, gameProgLogic);
