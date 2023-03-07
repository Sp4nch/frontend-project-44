import commonLogic from '../index.js';
import getRandomInRange from '../helpers/random-number.js';

const gameIntro = ('What is the result of the expression?');

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, operators.length - 1)];
  return operator;
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
  let rightAnsw;

  rightAnsw = calculation(numberOne, numberTwo, operator);
  rightAnsw = String(rightAnsw);
  return ([questionExpression, rightAnsw]);
};

export default () => commonLogic(gameIntro, gameCalcLogic);
