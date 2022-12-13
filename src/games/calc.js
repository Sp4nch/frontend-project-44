import commonLogic from '../index.js';
import randomNumber from '../helpers/random-number.js';

const gameCalc = () => {
  const gameIntro = ('What is the result of the expression?');
  const gameCalcLogic = () => {
    const numberOne = randomNumber(100);
    const numberTwo = randomNumber(100);

    const operators = ['+', '-', '*'];
    const operator = operators[randomNumber(2)];
    const questionExpression = `${numberOne} ${operator} ${numberTwo}`;
    let rightAnsw;

    switch (operator) {
      case '-':
        rightAnsw = numberOne - numberTwo;
        break;
      case '+':
        rightAnsw = numberOne + numberTwo;
        break;
      case '*':
        rightAnsw = numberOne * numberTwo;
        break;
      default:
        rightAnsw = null;
        break;
    }
    rightAnsw = String(rightAnsw);
    return ([questionExpression, rightAnsw]);
  };
  commonLogic(gameIntro, gameCalcLogic);
};
export default gameCalc;
