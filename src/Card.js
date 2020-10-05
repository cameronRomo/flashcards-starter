class Card {
  constructor(number, prompt, choices, bingo) {
    this.id = number;
    this.question = prompt;
    this.answers = choices;
    this.correctAnswer = bingo;
  }
}
module.exports = Card;
