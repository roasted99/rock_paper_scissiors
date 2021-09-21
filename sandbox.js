let selection = prompt('Rock, Paper or Scissors?')
let playerSelection = selection[0].toUpperCase() + selection.slice(1).toLowerCase();

let computerPlay = ['Rock', 'Paper', 'Scissors']

let computerPlayIndex = Math.floor(Math.random() * computerPlay.length);
const computer = computerPlay[computerPlayIndex]

console.log(computer)

const playRound = (playerSelection, computerSelection = computer) => {
    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You lose! Paper beats Rock.'
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'You lost! Scissors beats Paper.'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose! Rock beats Scissors.'
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors'){
        return 'You won! Scissors beats Paper.'
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        return 'You won! Rock beats Scissors.' 
    } else if (computerSelection == 'Rock' && playerSelection == 'Paper'){
        return 'You won! Paper beats Rock.'
    } else if (computerSelection == playerSelection) {
        return 'No one won'
    } else {
        return 'Your input is invalid.'
    }
}
console.log(playRound(`${playerSelection}`))