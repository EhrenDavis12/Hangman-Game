

window.onload = setGameUpToPlay();

document.onkeyup = function (event) {
    let playerChoice = event.key.charAt(0).toLowerCase();

    if (gameObject.restartGame) {
        setGameUpToPlay();
        renderDisplayWords();
    } else if (isPlayerInputValid(playerChoice)) {
        gameObject.lettersGuessed.push(playerChoice);
        manageGuessCount(playerChoice);
        renderDisplayWords();
        handlePlayerWin();
        handlePlayerLose();
    }
};

function setGameUpToPlay() {
    gameObject.lettersGuessed = [];
    gameObject.wordToBeGuessed = getNewWordFromList();

    displayObject.finalWordShown.textContent = messageDictionary.startGameMessage;
    renderDisplayWords();
    gameObject.numberOfGuesses = 10;
    gameObject.restartGame = false;
    displayObject.keyImageShown.hidden = true;
    displayObject.keyImageShown.src = "./assets/computerParts/" + gameObject.wordToBeGuessed + ".jpg";
}

function getNewWordFromList() {
    return wordDictionary[randomNumber(0, wordDictionary.length)].toLowerCase();
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function renderDisplayWords() {
    displayObject.guessingWordShown.textContent = getDisplayOfWordToBeGuessed(gameObject.wordToBeGuessed, gameObject.lettersGuessed);
    displayObject.lettersGuessedShown.textContent = getDisplayOfGuessedLetters(gameObject.lettersGuessed);
    displayObject.numOfTriesShown.textContent = gameObject.numberOfGuesses;
}

function getDisplayOfWordToBeGuessed(word, lettersGuessed) {
    let returnWord = "";
    word.split("").forEach(letter => {
        if (lettersGuessed.indexOf(letter) > -1) {
            returnWord += " " + letter;
        } else if (letter === " ") {
            returnWord += "  "; //not working find something else;
        } else {
            returnWord += " _";
        }
    });
    return returnWord;
}

function getDisplayOfGuessedLetters(lettersGuessed) {
    let returnWord = "";
    lettersGuessed.forEach(letter => {
        if (returnWord === "") {
            returnWord = letter
        } else {
            returnWord += ", " + letter;
        }
    });
    return returnWord;
}

function isPlayerInputValid(playerChoice) {
    if ((gameObject.lettersGuessed.indexOf(playerChoice) === -1) &&
        playerChoice.match("[a-z]"))
        return true;
    return false;
}

function manageGuessCount(playerChoice) {
    if (gameObject.wordToBeGuessed.split("").indexOf(playerChoice) === -1) { gameObject.numberOfGuesses -= 1; }
}

function handlePlayerWin() {
    try {
        gameObject.wordToBeGuessed.split("").forEach(letter => {
            if (gameObject.lettersGuessed.indexOf(letter) === -1) {
                if (letter !== " ")
                    throw "exit";
            }
        });
    } catch (e) {
        return;
    }
    displayObject.finalWordShown.textContent = messageDictionary.gameWonMessage;
    gameObject.restartGame = true;
    displayObject.keyImageShown.hidden = false;
}

function handlePlayerLose() {
    if (gameObject.numberOfGuesses < 1) {
        displayObject.finalWordShown.textContent = messageDictionary.gameLostMessage;
        gameObject.restartGame = true;
        displayObject.keyImageShown.hidden = false;
    }
}