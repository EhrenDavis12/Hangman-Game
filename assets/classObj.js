var displayObject = {
    finalWordShown: document.getElementById("finalWordShown"),
    guessingWordShown: document.getElementById("guessingWordShown"),
    lettersGuessedShown: document.getElementById("lettersGuessedShown"),
    numOfTriesShown: document.getElementById("numOfTriesShown"),
    keyImageShown: document.getElementById("keyImage")
};

var wordDictionary = ["CPU", "Compact Disc", "floppy disk", "hard disk",
    "Headphones", "Keyboard", "microphone", "MONITOR",
    "Mouse", "Printer", "Speakers", "Web camera"];

var gameObject = {
    lettersGuessed: [],
    wordToBeGuessed: "",
    numberOfGuesses: 10,
    restartGame: false
};

var messageDictionary = {
    startGameMessage: "Guess your word! Try not to die!",
    gameWonMessage: "You Won!!! Hit any key to play again!",
    gameLostMessage: "Sorry You Lost!!! Hit any key to play again!"
}