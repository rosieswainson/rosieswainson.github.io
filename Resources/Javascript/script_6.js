let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

  let humanGuessDiff = Math.abs(humanGuess - secretTarget);
  let computerGuessDiff = Math.abs(computerGuess - secretTarget);

     if (humanGuessDiff < computerGuessDiff || humanGuessDiff < computerGuessDiff) {
       return true;
     } else {
       return false;
     }
  }

const updateScore = theWinner => theWinner === 'human' ? humanScore++ : computerScore++; 

const advanceRound = () => currentRoundNumber++;