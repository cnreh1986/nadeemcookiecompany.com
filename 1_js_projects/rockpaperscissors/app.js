let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourname = document.querySelector("#yourname");
const enteryourname = prompt("Enter Your Name Please");
yourname.innerText = enteryourname;
// calculate the Players Score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//  logic budiling 
// Get user and Computer Choice.
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };
  // draw game fucntion
  const drawGame= ()=>{
    console.log("Game is draw.");
    msg.innerText = "Game was Drawn! Play again!"
    msg.style.backgroundColor ="yellow";
    msg.style.color = "black";
  };

  // Show the winner
  const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log(" Computer Baba Won!");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
    if (compScore=== 25 || userScore===25) {
        console.log(` userScore is ${userScore} and computerscore is ${compScore}`);
        alert(`Game Over User Score is  ${userScore} and Computer Score is ${compScore}`);
        setTimeout(function(){
            location.reload();
        }, 10000);
    }
  };
  // Game Logic 
const playGame = (userChoice)=>{
    // console.log("Your choice is", userChoice);
    //Generate Computer Choice
    const compChoice =genCompChoice();
    // console.log("Computer choice is", compChoice);
    if(userChoice=== compChoice){
      drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


// Caputring the user Choice 
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});