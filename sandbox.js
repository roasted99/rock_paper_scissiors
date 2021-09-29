const playerSelections = document.querySelectorAll('.player[data-selection]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const selections = ['rock', 'paper', 'scissors']

playerSelections.forEach(playerSelection => {
    playerSelection.addEventListener('click', e => {
        const selectionName = e.target.getAttribute('data-selection')
        makeSelection(selectionName)
    })
})

function makeSelection(selectionName) {
    //document.querySelector('p.player').textContent = `You have selected ${selectionName}.`
    const computerSelection = randomSelection()
    document.querySelector('.computer').textContent = `Computer has selected ${computerSelection}.`
    const playRound = (selectionName, computerSelection) => {
        const result = () => {
            if (selectionName == 'rock' && computerSelection == 'scissors') {
                return true
            } else if (selectionName == 'paper' && computerSelection == 'rock') {
                return true
            } else if (selectionName == 'scissors' && computerSelection == 'paper') {
                return true
            } else {
                return false
            }
        };
        if (result == true) {
           return console.log(`you win`)
         // document.querySelector('span.result').textContent = `You win!${selectionName} beats ${computerSelection}.`
        } else if (result == false) {
           return console.log('you lose')
         // document.querySelector('span.result').textContent = `You lose!${computerSelection} beats ${selectionName}.`
        } else {
            return console.log(draw)
          //document.querySelector('span.result').textContent = 'Draw.'
        }
    }
}
function randomSelection() {
    const index = Math.floor(Math.random() * selections.length)
    return selections[index]
}
