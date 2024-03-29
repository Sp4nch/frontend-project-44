import commonLogic from '../index.js';
import getRandomInRange from '../helpers/random-number.js';

const gameIntro = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberLocalOne, numberLocalTwo) => {
  if (numberLocalTwo === 0) {
    return numberLocalOne;
  }
  return getGcd(numberLocalTwo, numberLocalOne % numberLocalTwo);
};

const gameLogicGcd = () => {
  const numberOne = getRandomInRange(1, 100);
  const numberTwo = getRandomInRange(1, 100);
  const questionNumber = `${numberOne} ${numberTwo}`;

  const rightAnswer = String(getGcd(numberOne, numberTwo));
  return ([questionNumber, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameLogicGcd);
