import readlineSync from 'readline-sync';

const commonLogic = (gameIntro, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameIntro);

  for (let i = 0; i < 3; i += 1) {
    const questNumberAndRightAnswer = gameLogic();
    const questNum = questNumberAndRightAnswer[0];
    const rightAnswer = questNumberAndRightAnswer[1];

    console.log(`Question: ${questNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default commonLogic;
