let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#own-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const drawGame = () => {
  //   console.log("game was draw!");
  drawScore++;
  drawScorePara.innerText = drawScore;
  msg.innerText = "Game was Draw! play again";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin) => {
  if (userWin) {  //!userwin for win
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You lose");
    msg.innerText = "You Lose..";
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  //   console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  //   console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner();
  }
};

choices.forEach((choise) => {
  //   console.log(choise);
  choise.addEventListener("click", () => {
    const userChoice = choise.getAttribute("id");
    // console.log("choise was clicked!", userChoice);
    playGame(userChoice);
  });
});
