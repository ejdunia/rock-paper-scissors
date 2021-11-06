let playerScore = 0;
let computerScore = 0;
var tie;

const plScore = document.querySelector('#playerScoreDisplay');
const cmpScore = document.querySelector('#computerScoreDisplay');
const roundWinner = document.querySelector('#roundWinner');
const gameWinner = document.querySelector('#gameWinner');
const btns = document.querySelectorAll('.rps-button');
const reset = document.querySelector('.reset');
const randomButton = document.querySelector('#randomButton');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');


function computerPlay(){
    // picks a random choice from choices
    let choices = ['rock', 'paper', 'scissors']
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection){
    // gets input from a button selection and a random selection from the computer\
    // compares the selection with the random pick
    console.log(playerSelection);
    console.log(computerSelection);
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

    if(playerSelection == computerSelection){
        return(tie);
    }
    else if (
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore++
        return(playerSelection);
    }
    else {
        computerScore++;
        return(computerSelection);
       
    };
}
function disableButtons(){
    //hides the buttons with the hide class.
    var elems = document.getElementsByClassName("hide");
    for(var i = 0; i < elems.length; i++) {
        elems[i].hidden = true;
    }
}
function enableButtons(){
    var elems = document.getElementsByClassName("hide");
    for(var i = 0; i < elems.length; i++) {
        elems[i].hidden = false;
    }
} 

function updateScores(){
    if (winner==tie){
        roundWinner.textContent = `It's a Tie`;
    }
    else{roundWinner.textContent = `${winner} wins`;
    }
    plScore.textContent = `Player ${playerScore} -`;
    cmpScore.textContent = ` ${computerScore} Computer`;
}

function resetScores(){
    enableButtons();
    gameWinner.textContent = ''
    playerScore = 0;
    computerScore = 0;
    plScore.textContent = `Player ${playerScore} -`;
    cmpScore.textContent = ` ${computerScore} Computer`;
    roundWinner.textContent = `Make a Selection`;
    playerChoice.textContent = `player choice`;
    computerChoice.textContent = `computer choice`;
}

function announceWinner(){
    if(playerScore === 5){
        updateScores();
        roundWinner.textContent = '...';
        gameWinner.textContent = `Player Wins`;
        disableButtons();
    }
    else if(computerScore === 5){
        updateScores();
        roundWinner.textContent = '...';
        gameWinner.textContent = `Computer Wins`;
        disableButtons();
    }
    else{
        updateScores();
    }
}

reset.addEventListener('click',resetScores);

randomButton.addEventListener('click', ()=> {
    // a button for a random selection 
    computerSelection = computerPlay();
    playerSelection = computerPlay();

    winner = playRound(playerSelection, computerSelection);
    announceWinner();
})   

btns.forEach((button)=>{
    button.addEventListener('click', () =>{
    //add a click event listener to the buttons except the random button
    let computerSelection = computerPlay();
    let playerSelection = button.textContent.trim().toLocaleLowerCase();

    winner = playRound(playerSelection, computerSelection);
    announceWinner();
    })   
});
