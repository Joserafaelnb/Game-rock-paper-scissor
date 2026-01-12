const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
        return userInput;
    } else {
        console.log('error, the input is not valid');
    }

}

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);

    if (choiceNumber == 0) {
        return 'rock';
    } else if (choiceNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {

    if (userChoice == 'bomb') {
        return 'the user won';
    } else if (userChoice == computerChoice) {
        return 'the game was a tie';
    } else if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            return 'the computer won';
        } else {
            return 'the user won';
        }
    } else if (userChoice == 'paper') {
        if (computerChoice == 'scissors') {
            return 'the computer won';
        } else {
            return 'the user won';
        }
    } else {
        if (computerChoice == 'rock') {
            return 'the computer won';
        } else {
            return 'the user won';
        }
    }
}

function playGame() {
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log('User choice is ' + userChoice);
    console.log('Computer choice is ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
  