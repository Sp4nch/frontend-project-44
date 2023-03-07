import commonLogic from '../index.js';
import getRandomInRange from '../helpers/random-number.js';

const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (NumberLocal) => {
  let iterator = 0;
  const border = Math.round(NumberLocal / 2);
  for (let i = 1; i <= border; i += 1) {
    if (NumberLocal % i === 0) {
      iterator += 1;
    }
    if (iterator > 1) {
      return ('no');
    }
  }
  return ('yes');
};

const gamePrimeLogic = () => {
  const numberOne = getRandomInRange(3, 100);
  const rightAnswer = isPrime(numberOne);
  return ([numberOne, rightAnswer]);
};

export default () => commonLogic(gameIntro, gamePrimeLogic);
