class Turn {
  constructor(prediction, card) {
    this.guess = prediction;
    this.currentCard = card;
    this.isCorrect = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.guess !== this.currentCard.correctAnswer) {
      return this.isCorrect = false;
    } else {
      return this.isCorrect = true;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}


module.exports = Turn;
