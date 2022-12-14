import commonLogic from '../index.js';
import randomNumber from '../helpers/random-number.js';

const gamePrime = () => {
  const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gamePrimeLogic = () => {
    const numberOne = randomNumber(100) + 2;
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
    const rightAnswer = isPrime(numberOne);
    return ([numberOne, rightAnswer]);
  };
  commonLogic(gameIntro, gamePrimeLogic);
};
export default gamePrime;
