const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

describe('Round', function() {
  let deck;
  let card1;
  let card2;
  let card3;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have the first card be card in play', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have default turns count of 0', function() {
    expect(round.turnsCount).to.equal(0);
  });

  it('should increment turns', function() {
    round.takeTurn();
    expect(round.turnsCount).to.equal(1);
  });

  it('should give feedback', function() {
    let incorrectGuess = round.takeTurn('Totally the right answer');
    expect(incorrectGuess).to.equal('Incorrect!');
  })

  it('should change to next card', function() {
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should calculate percent correct', function() {
    round.takeTurn('Gotta be right');
    round.takeTurn('Totall');

    expect(round.calculatePercentCorrect()).to.equal(0);
  });

  it('should declare end of round', function() {
    round.takeTurn('Gotta be right');
    round.takeTurn('Totall');
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal(null);
  })
})
