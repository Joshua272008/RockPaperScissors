var player;
var comp;

function rock()
{
    player = "rock";
}
function paper()
{
    player = "paper";

    console.log("player chose paper");
}
function scissor()
{
    player = "scissor";
}

function compChoice()
{
    var rpc = ["rock", "paper", "scissors"]
    comp = Math.floor(Math.random() * 3);
    return rpc[comp];
}

function shoot() {
    var compWin = "Computer Wins"
    var playerWin = "Player Wins"
    let winner;


    compChoice();

    if(player === comp)
    {
        console.log("Computer Wins");
        winner = "It's a tie!"
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "rock" && comp === "paper")
    {
            console.log("Computer Wins")
        winner = "Computer Wins"
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "rock" && comp === "scissor")
    {
        console.log("Player Wins")
        winner = "Player Wins"
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "paper" && comp === "scissor")
    {
        console.log("Computer Wins")
        winner = "Computer Wins"
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "paper" && comp === "rock")
    {
        console.log("Player Wins")
        winner = "Player Wins"
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "scissor" && comp === "rock")
    {
        console.log("Computer Wins")
        winner = "Computer Wins"

        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "scissor" && comp === "paper")
    {
        console.log("Player Wins")
        winner = "Player Wins"
        document.getElementById("winnerDisplayed").innerHTML += winner;

    }
    document.getElementById("winnerDisplayed").innerHTML += winner;

}

