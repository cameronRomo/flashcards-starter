const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');

class Game {
  constructor() {
    this.round = null;
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.round = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
