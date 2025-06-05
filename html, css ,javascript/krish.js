let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#your_no");
const compscore = document.querySelector("#comp_no");

const getcompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  msg.innerText = "game was draw";
  msg.style.backgroundColor = "rgb(28, 232, 21)";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    user_score++;
    userscore.innerText = user_score;
    msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "rgb(11, 255, 3)";
  } else {
    comp_score++;
    compscore.innerText = comp_score;
    msg.innerText = `you lose! your ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "rgb(234, 117, 88)";
  }
};

const playgame = (userchoice) => {
  // comp choice
  const compchoice = getcompchoice();
  //rule of game
  if (userchoice === compchoice) {
    //draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissor , paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissor
      userwin = compchoice === "scissor" ? false : true;
    } else {
      //rock , paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
