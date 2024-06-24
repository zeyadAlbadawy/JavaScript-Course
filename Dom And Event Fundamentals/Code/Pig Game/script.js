"use strict";

// Selecting The Elements
const score0Elm = document.querySelector("#score--0");
const score1Elm = document.querySelector("#score--1");
const diceElm = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0Elm = document.querySelector("#current--0");
const current1Elm = document.querySelector("#current--1");
const player0Elm = document.querySelector(".player--0");
const player1Elm = document.querySelector(".player--1");

// Initial Conditions
score0Elm.textContent = 0;
score1Elm.textContent = 0;
diceElm.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
let playersScore = [0, 0];
let playingOfGame = true;
// Implement Rolling The Dice Functionality
let switchPlayers = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

btnRoll.addEventListener("click", () => {
  // 1-> Generate Random Dice
  // 2-> Display the Image
  // 3-> Check if The Value is one Or not.
  // If the Current Score == 1 ->> Switch The Players
  if (playingOfGame) {
    let getTheRandomNum = Math.trunc(Math.random() * 6) + 1;
    diceElm.classList.remove("hidden");
    diceElm.src = `dice-${getTheRandomNum}.png`;

    if (getTheRandomNum != 1) {
      currentScore += getTheRandomNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch The Players
      switchPlayers();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playingOfGame) {
    // 1->> Add Current Score to The Active Player Global Score
    playersScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      playersScore[activePlayer];
    // 2->> check The Current Global Score If it Exceeds 100 or not !
    if (playersScore[activePlayer] >= 20) {
      playingOfGame = false;
      document.querySelector(".player--active").classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceElm.classList.add("hidden");
      // Need To Disable The Buttons OF Hold And Roll And Remove the image of the Dice
    }
    // 3->> Switch The Players
    else switchPlayers();
  }
});

btnNew.addEventListener("click", () => {
  playersScore[0] = 0;
  playersScore[1] = 0;
  currentScore = 0;
  playingOfGame = true;
  score0Elm.textContent = 0;
  score1Elm.textContent = 0;
  current0Elm.textContent = 0;
  current1Elm.textContent = 0;
  diceElm.classList.remove("hidden");
  player0Elm.classList.remove("player--winner");
  player1Elm.classList.remove("player--winner");
  player0Elm.classList.remove("player--active");
  player1Elm.classList.remove("player--active");
  activePlayer = 0;
});
