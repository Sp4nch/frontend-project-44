import commonLogic from '../index.js';
import randomNumber from '../helpers/random-number.js';

const gameGcd = () => {
  const gameIntro = 'Find the greatest common divisor of given numbers.';
  const gameLogicGcd = () => {
    let numberOne = randomNumber(100);
    let numberTwo = randomNumber(100);
    if (numberOne === 0) {
      numberOne = numberOne += 1;
    } else if (numberTwo === 0) {
      numberTwo = numberTwo += 1;
    }

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
