import commonLogic from '../index.js';
import getRandomInRange from '../helpers/random-number.js';

const gameIntro = ('What is the result of the expression?');

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Operator ${operator} - is incorrect`);
  }
};

const gameCalcLogic = () => {
  const numberOne = getRandomInRange(1, 100);
  const numberTwo = getRandomInRange(1, 100);
  const operator = getRandomOperator();
  const questionExpression = `${numberOne} ${operator} ${numberTwo}`;
  const rightAnswer = String(calculation(numberOne, numberTwo, operator));
  return ([questionExpression, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameCalcLogic);
