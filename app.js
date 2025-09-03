let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");


const genCompChoice = () => {
    const options = ["rock" ,"paper", "scissors"];
    const rndmInx = Math.floor(Math.random() * 3);
    return options[rndmInx];

};

   const drawGame = () => {
        msg.innerText = "Game was draw. Play again!";
        msg.style.backgroundColor = "#081b31";
   }

   const showWinner = (userWin, userChoice, compChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            console.log("you win ");
            msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
   }

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }

    else{
      let userWin = true;

        if (userChoice === "rock") {
            // rock beats scissors
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            // paper beats rock
            userWin = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            // scissors beats paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
