"use strict";

// document.querySelector(".message").textContent =
//   "Correct number! Edited by Asif!";
// document.querySelector(".score").textContent = "10";
// document.querySelector(".highscore").textContent = "30";
// document.querySelector(".guess").value = "10";

// console.log(document.querySelector(".message").textContent);
// console.log((document.querySelector(".guess").value = "10"));

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent= "📉 Too low"
  }
});
