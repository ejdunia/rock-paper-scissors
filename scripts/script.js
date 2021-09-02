function computerPlay(){
    // picks a random choice from choices
    let choices = ['rock', 'paper', 'scissors']
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
    
}
function playerPlay(){
    let playerSelection = prompt('Kindly input either "Rock", "Paper", or "Scissors".', 'Rock').toLowerCase();
    return playerSelection
}

function playerRound(playerSelection, computerSelection){
    // gets the results and add the scores

    if(playerSelection == computerSelection){
    return("It's a TIE")
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return(playerSelection)
    }
    else if 
        (playerSelection == 'rock' && computerSelection == 'scissors'){
        return(playerSelection)

    }
    else if 
        (playerSelection == 'scissors' && computerSelection == 'paper'){
        return(playerSelection)

    }
    else {
        return(computerSelection)
    }
}


function updateScores(winner, playerSelection, computerSelection){
    // let playerScore;
    // let computerScore;
    // let tie ;
    // let winner;

    if (playerSelection == winner && computerSelection != winner){
        playerScore++;
    }
    else if(playerSelection == computerSelection){
        tie++;
    }
    else{
        computerScore++;
    }
    console.log(`playerscore is ${playerScore}`)
    console.log(`computer score is ${computerScore}`)
}


function game(gameLimit = 6){
    gameLimit = 6;
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    let winner;

    for (let round = 1; round < gameLimit; round++){
        console.log(`Round: ${round}`)

        const playerSelection = playerPlay()
        const computerSelection = computerPlay()

        console.log(`player selection is ${playerSelection}`)
        console.log(`computer selection is ${computerSelection}`)
        
        winner = playerRound(playerSelection, computerSelection)

        if (playerSelection == winner && computerSelection != winner){
            console.log('Player Wins')
            playerScore++;
        }
        else if(playerSelection == computerSelection){
            console.log('Its a Tie')
            tie++;
        }
        else{
            console.log('Commputer Wins')
            computerScore++;
        }
        // updateScores(winner, playerSelection, computerSelection)

            console.log(`playerscore is ${playerScore}`)
            console.log(`computer score is ${computerScore}`) 
        }


}

   
game()