import commonLogic from '../index.js';
import randomNumber from '../helpers/random-number.js';

const gameGcd = () => {
  const gameIntro = 'Find the greatest common divisor of given numbers.';
  const gameLogicGcd = () => {
    const numberOne = randomNumber(100);
    const numberTwo = randomNumber(100);

    const questionNumber = `${numberOne} ${numberTwo}`;

    const getGcd = (numberLocalOne, numberLocalTwo) => {
      if (numberLocalTwo === 0) {
        return numberLocalOne;
      }
      return getGcd(numberLocalTwo, numberLocalOne % numberLocalTwo);
    };
    let rightAnsw = getGcd(numberOne, numberTwo);
    rightAnsw = String(rightAnsw);
    return ([questionNumber, rightAnsw]);
  };
  commonLogic(gameIntro, gameLogicGcd);
};

export default gameGcd;
