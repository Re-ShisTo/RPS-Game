let sumPlayer = 0;
let sumAI = 0;
let choices = document.querySelectorAll(".RPS");
let result = document.querySelector(".result");
let userScore = document.querySelector("#user-score");
let AIScore = document.querySelector("#AI-score");
let msg = document.querySelector("#You");
let aimsg = document.querySelector("#AI");

const AIMind = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random () * 3);
    return options[randomIdx]; 
};

const gameMind = (userChoice) =>{
    console.log("User choice is", userChoice);
    const AIChoice = AIMind();
    console.log("AI Choice is", AIChoice);
    msg.innerText = `You Chose ${userChoice}`;
    aimsg.innerText = `AI Chose ${AIChoice}`;

    if(userChoice === AIChoice){
        console.log("Draw");
        result.innerText = "Draw!"
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = AIChoice === "Paper" ? false : true;
            if(userWin === true){
                console.log("Winner is PLayer");
                result.innerText = "Player is Winner!"
                sumPlayer += 1;
                userScore.innerText = `${sumPlayer}`;
            }
            else{
                console.log("Ai has won");
                result.innerText = "AI is Winner!"
                sumAI += 1;
                AIScore.innerText = `${sumAI}`;
            }
        }
        else if(userChoice === "Paper"){
            userWin = AIChoice === "Scissors" ? false : true;
            if(userWin === true){
                console.log("Winner is PLayer");
                result.innerText = "Player is Winner"
                sumPlayer += 1;
                userScore.innerText = `${sumPlayer}`;
            }
            else{
                console.log("Ai has won");
                result.innerText = "AI is Winner"
                sumAI += 1;
                AIScore.innerText = `${sumAI}`;
            }
        }
        else if(userChoice === "Scissors"){
            userWin = AIChoice === "Rock" ? false : true;
            if(userWin === true){
                console.log("Winner is PLayer");
                result.innerText = "Player is Winner"
                sumPlayer += 1;
                userScore.innerText = `${sumPlayer}`;
            }
            else{
                console.log("Ai has won");
                result.innerText = "AI is Winner"
                sumAI += 1;
                AIScore.innerText = `${sumAI}`;
            }
        }
    }
};

choices.forEach((RPS) => {
    RPS.addEventListener("click", () =>{
        const userChoice = RPS.getAttribute("id");
        gameMind(userChoice);
    });
});
