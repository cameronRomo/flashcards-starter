const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js')
const Card = require('../src/Card.js')
const Turn = require('../src/Turn.js');
const Game = require('../src/Game.js')

describe('Game', function() {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
  expect(game).to.be.an.instanceof(Game);
});

  it('should instantiate a current round', function() {
    game.start();
    expect(game.round).to.be.an.instanceof(Round);
  });

  it('should create a deck of cards', function() {
    expect(game.start()).to.deep.equal(game.prototypeQuestions)
  })
});
