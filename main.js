let game = () => {
    let winner = ''
    for (i = 0; i < 5; i++) {
        // let selection = prompt('Rock, Paper or Scissors?')
        let playerSelection = selection[0].toUpperCase() + selection.slice(1).toLowerCase();

        let computerPlay = ['Rock', 'Paper', 'Scissors']

        let computerPlayIndex = Math.floor(Math.random() * computerPlay.length);
        const computer = computerPlay[computerPlayIndex]

        console.log(computer)
        const playRound = (playerSelection, computerSelection = computer) => {
            let result = () => {
                if (playerSelection == 'Rock' && computerSelection == 'Paper') {
                    return false
                } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
                    return false
                } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
                    return false
                } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
                    return true
                } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
                    return true
                } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
                    return true
                } else if (computerSelection == playerSelection) {
                    return 'No one won'
                } else {
                    return 'Your input is invalid.'
                }
            };
            if (result = true) {
                return `You won! ${playerSelection} beats ${computerSelection}.`
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection}.`
            }
        }
    }
    if (true > 3) {
        return 'You have won the game.'
    } else {
        return 'You have lost the game.'
    }
}
console.log(game())