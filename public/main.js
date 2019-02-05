// when the team 1 add 1 button is clicked
let team1Score = 0

let team2Score = 0

// 2nd thing i created this thing -- added this function

const add1toTeamScore = () => {
  console.log('adding team 1 score')
  // 3rd thing i did -- add one to team score
  team1Score = team1Score + 1
  console.log('the new score is ' + team1Score)
  // update the HTML with the new score

  document.querySelector('.team1Score').textContent = team1Score
}

const subtract1toTeamScore = () => {
  console.log('subtracting team 1 score')
  team1Score = team1Score + -1
  console.log('the new score is ' + team1Score)
  document.querySelector('.team1Score').textContent = team1Score
}

const add1toTeamScore2 = () => {
  console.log('adding team 2 score')
  team2Score = team2Score + 1
  console.log('the new score is ' + team2Score)
  document.querySelector('.team2Score').textContent = team2Score
}

const subtract1toTeamScore2 = () => {
  console.log('subtracting team 2 score')
  team2Score = team2Score + -1
  console.log('the new score is ' + team2Score)
  document.querySelector('.team2Score').textContent = team2Score
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
