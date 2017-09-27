console.log("we're hooked up!")

const words = ["one", "two", "three", "four", "five"];

const chooseWord = (arr) => {
	const chosenWord = words[Math.floor((Math.random() * arr.length-1) + 1)];
	return chosenWord
}

const generateWord = () => {
	const letters = chooseWord(words).split("");
	for (var i = 0; i < letters.length; i++) {
		const $div = $('<div>', {class:'letterBox'})
		const $span = $('<span>', {class:'letter'})
		$span.text(letters[i])
		$('#word').append($div)
		$div.append($span)
	}
	return letters;
}


const game = {
	guesses: 3,
	guessedLetters: [],
	gameOver: false,
	isOver: () => {
		if (this.guesses === 0) {
			this.gameOver = true;
		} else if (this.guesses === 0) {

		}
	},
	overMessage: () => {
		if (true) {} else {}

	}
}

generateWord();
var userLetter = $('#letterGuess')[0].value
const $lettersOnScreen = $('span')
$('#guessBtn').on("click", () => {
	userLetter = $('#letterGuess')[0].value
	for (var i = 0; i < $lettersOnScreen.length; i++) {
		if ($lettersOnScreen[i].textContent === userLetter) {
			$lettersOnScreen[i].style.visibility = "visible"
		} else {
			console.log("no")
		}
	}
})