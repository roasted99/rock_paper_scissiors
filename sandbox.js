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
    document.querySelector('.computer').textContent = `Computer has selected "${computerSelection}".`

    const playRound = (selectionName, computerSelection) => {
        if (selectionName == 'rock' && computerSelection == 'scissors') {
            return true
        } else if (selectionName == 'paper' && computerSelection == 'rock') {
            return true
        } else if (selectionName == 'scissors' && computerSelection == 'paper') {
            return true
        } else if (selectionName == 'rock' && computerSelection == 'paper') {
            return false
        } else if (selectionName == 'paper' && computerSelection == 'scissors') {
            return false
        } else if (selectionName == 'scissors' && computerSelection == 'rock') {
            return false
        } else if (selectionName == computerSelection) {
            return document.querySelector('span.result').textContent = 'Draw.'
        }

    };
    const round = playRound(selectionName, computerSelection)
    if (round == true) {
        return document.querySelector('span.result').textContent = `You win!"${selectionName}" beats "${computerSelection}".`,
            document.querySelector('.player.score').innerText = parseInt(yourScoreSpan.innerText) + 1
    } else if (round == false) {
        return document.querySelector('span.result').textContent = `You lose!"${computerSelection}" beats "${selectionName}".`,
            document.querySelector('.comp.score').innerText = parseInt(computerScoreSpan.innerText) + 1
    }
}

function randomSelection() {
    const index = Math.floor(Math.random() * selections.length)
    return selections[index]
}
