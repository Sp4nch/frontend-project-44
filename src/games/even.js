import commonLogic from '../index.js';
import randomNumber from '../helpers/random-number.js';

const gameEven = () => {
  const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameEvenLogic = () => {
    const questionNumber = randomNumber(100);
    const rightAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
    return ([questionNumber, rightAnswer]);
  };
  commonLogic(gameIntro, gameEvenLogic);
};

export default gameEven;
