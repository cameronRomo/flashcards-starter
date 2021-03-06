const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('Literally no idea!');
    expect(turn.guess).to.equal('Literally no idea!');
  });

  it('should store card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Huh??', card);
    expect(turn.currentCard).to.be.an.instanceof(Card);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('something random', card);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the currentCard', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Definitely the right answer', card);
    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('should evaluate incorrect guess', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('Definitely the right answer', card);
  turn.evaluateGuess();
  expect(turn.isCorrect).to.equal(false);
  });

  it('should evaluate correct guess', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);
  turn.evaluateGuess();
  expect(turn.isCorrect).to.equal(true);
  });

  it('should give feedback', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('Definitely the right answer', card)
  expect(turn.giveFeedback()).to.equal('Incorrect!')
  })
});
