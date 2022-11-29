const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function () {
    const card = new Card(1, 'How are you?', ['great', 'good', 'fine', 'bad'], 'good');
    let turn;
    beforeEach(() => turn = new Turn('good', card));

    it('should be a function', function () {
        expect(Turn).to.be.a('function');
    })

    it('should store the users guess', function () {
        const userGuess = turn.returnGuess();

        expect(userGuess).to.equal(card.correctAnswer)
    })

    it('should return the current turns card', function () {
        const currentCard = turn.returnCard();

        expect(currentCard).to.deep.equal(card);
    })

    it('should check if users guess is correct', function () {
        const correct = turn.evaluateGuess();

        expect(correct).to.equal(true);
    })

    it('should return feedback according to the players guess', function () {
        const message = turn.giveFeedback();

        expect(message).to.equal('correct!');
    })
})