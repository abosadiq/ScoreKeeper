let playerOne = document.getElementById("player-1");
let playerTwo = document.getElementById("player-2");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let reset = document.getElementById("btn-3");
let playTo = document.querySelector("#playing__to");
let input = document.querySelector(".input");
let playerOneScore = 0;
let playerTwoScore = 0;
let isGameOver = false;
let bestScore = 7;

btn1.addEventListener("click", () => {
  if (!isGameOver) {
    playerOneScore += 1;
    if (playerOneScore === bestScore) {
      playerOne.classList.add("winning");
      playerTwo.classList.add("loser");
      isGameOver = true;
    }
    playerOne.innerHTML = playerOneScore;
  }
});

btn2.addEventListener("click", () => {
  if (!isGameOver) {
    playerTwoScore += 1;
    if (playerTwoScore === bestScore) {
      playerTwo.classList.add("winning");
      playerOne.classList.add("loser");
      isGameOver = true;
    }
  }
  playerTwo.innerHTML = playerTwoScore;
});

reset.addEventListener("click", () => {
  restingGame();
});

// resting the game Function
restingGame = () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOne.innerHTML = 0;
  playerTwo.innerHTML = 0;
  isGameOver = false;
  playerTwo.classList.remove("winning");
  playerOne.classList.remove("winning");
  playerOne.classList.remove("loser");
  playerTwo.classList.remove("loser");
};
input.addEventListener("change", function() {
  playTo.textContent = input.value;
  bestScore = Number(input.value);
  restingGame();
});
