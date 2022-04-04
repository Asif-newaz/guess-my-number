"use strict";

// document.querySelector(".message").textContent =
//   "Correct number! Edited by Asif!";
// document.querySelector(".score").textContent = "10";
// document.querySelector(".highscore").textContent = "30";
// document.querySelector(".guess").value = "10";

// console.log(document.querySelector(".message").textContent);
// console.log((document.querySelector(".guess").value = "10"));

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number";
  }
});
