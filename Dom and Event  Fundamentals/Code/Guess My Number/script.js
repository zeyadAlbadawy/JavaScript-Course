"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = randomNumber;
let score = 20;
let highScore = 0;

const displayMessages = (message) => {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!guess) {
      displayMessages("No Number Choosen !");
    } else if (guess === randomNumber) {
      displayMessages("Congrats🎉, Correct Number");
      document.querySelector(".number").textContent = randomNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else if (guess !== randomNumber) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessages(
        guess < randomNumber
          ? "The Entered Number is Too Low"
          : "The Entered Number is Too High"
      );
    }
  } else {
    displayMessages("You Lost The Game !");
    document.querySelector("body").style.backgroundColor = "red";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".score").textContent = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessages("Start guessing... ");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector.style.body = "15rem";
  document.querySelector(".guess").value = "";
});
