'use strict'

const labelPlayer1 = document.querySelector(`.player__1`);
const labelPlayer2 = document.querySelector(`.player__2`);

const labelScore1 = document.getElementById('score__1');
const labelScore2 = document.getElementById('score__2');
const labelCurrent1 = document.getElementById('current__1');
const labelCurrent2 = document.getElementById('current__2');

let imgDice = document.querySelector('.dice');

const btnNewGame = document.querySelector(".btn__new");
const btnDice = document.querySelector(".btn__dice");
const btnHold = document.querySelector('.btn__hold');

let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;


const newGame = () => {
    labelPlayer1.classList.remove('player__winner');
    labelPlayer2.classList.remove('player__winner');
    labelPlayer1.classList.add('player__active');
    labelPlayer2.classList.remove('player__active');
    labelScore1.textContent = 0;
    labelScore2.textContent = 0;
    labelCurrent1.textContent = 0;
    labelCurrent2.textContent = 0;
    imgDice.classList.add("hidden");
}
newGame();


// NewGame Button 
btnNewGame.addEventListener('click', newGame);

// 1. Generating a Random dice Roll
const numGenerator = (maxN) => {
    return Math.trunc(Math.random() * maxN) + 1;
}

// Switch User Function
const switchPlayer = () => {
    document.getElementById(`current__${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer > 1 ? 1 : 2;
    labelPlayer1.classList.toggle('player__active');
    labelPlayer2.classList.toggle('player__active');
}

// Score Holding Functionality
btnHold.addEventListener('click', () => {
    if (playing) {
        activePlayer === 1 ? labelScore1.textContent = scores[0] += currentScore : labelScore2.textContent = scores[1] += currentScore;

        // Chack if Player's Score is >=100
        //finish the game
        if (scores[activePlayer - 1] >= 20) {
            document.querySelector(`.player__${activePlayer}`).classList.add('player__winner');
            playing = false;
            imgDice.classList.add('hidden');
        }

        // Switch Player
        switchPlayer();
    }

});

// Rolling dice functionality
btnDice.addEventListener('click', () => {
    if (playing) {
        imgDice.classList.remove('hidden');
        const dice = numGenerator(6);

        //2. Display Dice
        console.log(imgDice.src = `img/dice-${dice}.png`);

        // 3. Check for rolled 1
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current__${activePlayer}`).textContent = currentScore;
        } else {
            // switch to next player
            switchPlayer();
        }
    }

})

