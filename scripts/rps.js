const moves = ["Rock", "Paper", "Scissors"]

function computerPlay()
{
  let num = Math.floor(3*Math.random())
  let move = moves[num]

  return move
}

function playRound(playerSelection, computerSelection)
{
  let playerWin = false
  let playerLoss = false
  let tie = false

  playerSelection = playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase()

  if(playerSelection === "Rock")
  {
    if(computerSelection === "Rock")
    {
      tie = true
    }
    else if(computerSelection === "Scissors")
    {
      playerWin = true
    }
    else
    {
      playerLoss = true
    }
  }
  else if(playerSelection === "Scissors")
  {
    if(computerSelection === "Rock")
    {
      playerLoss = true
    }
    else if(computerSelection === "Scissors")
    {
      tie = true
    }
    else
    {
      playerWin = true
    }
  }
  else if(playerSelection === "Paper")
  {
    if(computerSelection === "Rock")
    {
      playerWin = true
    }
    else if(computerSelection === "Scissors")
    {
      playerLoss = true
    }
    else
    {
      tie = true
    }
  }

  let returnString = ""

  if(playerWin)
  {
    returnString = "You Win! " + playerSelection + " beats " + computerSelection + "."
  }
  else if(playerLoss)
  {
    returnString = "You Lose! " + computerSelection + " beats " + playerSelection + "."
  }
  else if(tie)
  {
    returnString = "Tie!"
  }
  else
  {
      returnString = "You entered something wrong, try again"
  }

  return returnString
}

function game()
{
  let rounds = 5
  let playerScore = 0
  let compScore = 0
  let ties = 0

  for(i = 0; i < rounds; i++)
  {
    playerMove = prompt("Rock, Paper, Scissors?")
    compMove = computerPlay()

    let result = playRound(playerMove, compMove)

    if(result.search("Lose") != -1)
    {
      compScore++
    }
    else if(result.search("Win") != -1)
    {
      playerScore++
    }
    else if(result.search("Tie") != -1)
    {
      ties++
    }
    else if(result.search("wrong") != -1)
    {
      i--
    }

    console.log(result)

    console.log("Player: " + playerScore + "\nComputer: " + compScore + "\nTies: " + ties)
  }

  if(playerScore > compScore)
  {
    console.log("You Win!")
  }
  else if(playerScore < compScore)
  {
    console.log("You Lose!")
  }
  else
  {
    console.log("Tie!?")
  }
}

game()
