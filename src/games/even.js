import readlineSync from 'readline-sync';
import randomNumber from '../helpers/random-number.js';

const gameEvenLogic = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const questionNumber = randomNumber(100);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}`);
};

export default gameEvenLogic;
