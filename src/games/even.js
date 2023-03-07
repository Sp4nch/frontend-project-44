import commonLogic from '../index.js';
import getRandomInRange from '../helpers/random-number.js';

const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameEvenLogic = () => {
  const questionNumber = getRandomInRange(1, 100);
  const rightAnswer = isEven(questionNumber);
  return ([questionNumber, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameEvenLogic);
