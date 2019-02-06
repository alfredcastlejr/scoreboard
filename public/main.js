// when the team 1 add 1 button is clicked
let team1Score = 0

let team2Score = 0

let teamName1 = 'Team 1'

let teamName2 = 'Team 2'

// 2nd thing i created this thing -- added this function

const add1toTeamScore = () => {
  console.log('adding team 1 score')
  // 3rd thing i did -- add one to team score
  team1Score = team1Score + 1
  console.log('the new score is ' + team1Score)
  // update the HTML with the new score

  document.querySelector('.team1Score').textContent = team1Score

  // If reached score 21 then..
  if (team1Score === 21) {
    // Disables the 4 buttons (add and substract of team 1 and 2)
    // .disabled is the HTML attribute of the buttons (we set it to true)
    disableButtons()

    // Show message
    window.alert('Great ' + teamName1 + '! You won!')
  }
}

const subtract1toTeamScore = () => {
  console.log('subtracting team 1 score')
  team1Score = team1Score + -1 // If 0 is greater than team1Score, then we get 0
  if (team1Score < 0) {
    team1Score = 0
  }
  console.log('the new score is ' + team1Score)
  document.querySelector('.team1Score').textContent = team1Score
}

const add1toTeamScore2 = () => {
  console.log('adding team 2 score')
  team2Score = team2Score + 1
  console.log('the new score is ' + team2Score)
  document.querySelector('.team2Score').textContent = team2Score

  // If reached score 21 then..
  if (team2Score === 21) {
    // Disables the 4 buttons (add and substract of team 1 and 2)
    // .disabled is the HTML attribute of the buttons (we set it to true)
    disableButtons()

    // Show message
    window.alert('Great ' + teamName2 + '! You won!')
  }
}

const disableButtons = () => {
  document.querySelector('.team-1-subtract-1-button').disabled = true
  document.querySelector('.team-1-add-1-button').disabled = true
  document.querySelector('.team-2-subtract-1-button').disabled = true
  document.querySelector('.team-2-add-1-button').disabled = true
}

const subtract1toTeamScore2 = () => {
  console.log('subtracting team 2 score')
  team2Score = Math.max(team2Score + -1, 0) // If 0 is greater than team2Score, then we get 0
  console.log('the new score is ' + team2Score)
  document.querySelector('.team2Score').textContent = team2Score
}

const team2Name = () => {
  teamName2 = document.querySelector('.team2 input').value
  document.querySelector('.team2 h2').textContent = teamName2
}

const team1Name = () => {
  teamName1 = document.querySelector('.team1 input').value
  document.querySelector('.team1 h2').textContent = teamName1
}

const resetGame = () => {
  // window is the main global object
  // location is another object with a lot of information and methods (like the reload one)
  window.location.reload()
}

// anything w the button should be in that squiggle

// 1st thing i did -- add event andler
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1toTeamScore)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtract1toTeamScore)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', add1toTeamScore2)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtract1toTeamScore2)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1Name)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', team2Name)

// Gets the .reset element, then the button inside and adds a click event with the
// "resetGame" callback fn.
document.querySelector('.reset button').addEventListener('click', resetGame)
