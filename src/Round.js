const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnsCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let currentCard = this.deck[0];
    return currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    this.turnsCount++;
    if (turn.guess !== this.deck[0].correctAnswer) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.deck.splice(0, 1);
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correct = this.turnsCount - this.incorrectGuesses.length;
    let percent = (correct / this.turnsCount) * 100;
    return percent
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return null
  }
}

module.exports = Round;
