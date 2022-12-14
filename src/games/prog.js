import commonLogic from '../index.js';
import randomNumber from '../helpers/random-number.js';

const gameProg = () => {
  const gameIntro = 'What number is missing in the progression?';
  const gameProgLogic = () => {
    const numberOne = randomNumber(100);
    const increaseNuber = randomNumber(100);
    let collNumbers = [numberOne];
    for (let i = 1; collNumbers.length - 1 < 10; i += 1) {
      collNumbers.push(numberOne + increaseNuber * i);
    }
    const missingNumber = randomNumber(collNumbers.length);
    let rightAnsw = collNumbers[missingNumber];
    collNumbers[missingNumber] = '..';
    collNumbers = collNumbers.join(' ');
    rightAnsw = String(rightAnsw);
    return ([collNumbers, rightAnsw]);
  };
  commonLogic(gameIntro, gameProgLogic);
};
export default gameProg;
