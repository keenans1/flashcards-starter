const chai = require('chai');
const expect = chai.expect;
const prototypeData = require('../src/data.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn.js');

describe('Round', function () {

    let round;
    beforeEach(() => round = new Round(deck));

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    it('should be a function', function () {
        expect(Round).to.be.a('function');
    })

    it('should have a deck', function () {
        expect(round.deck).to.deep.equal(deck);
    })

    it('should return the current card', function () {
        let currentCard = round.returnCurrentCard();

        expect(currentCard).to.deep.equal(deck.cards[0]);

        round.takeTurn();

        currentCard = round.returnCurrentCard();

        expect(currentCard).to.deep.equal(deck.cards[1]);
    })

    it('should give feedback after a turn', function () {
        const feedback = round.takeTurn('sea otter');

        expect(feedback).to.equal('correct!');
    })

    it('should calculate the correct guess percentage', function () {
        round.takeTurn('abc');
        round.takeTurn('gallbladder');
        round.takeTurn('playing with bubble wrap');

        const winningPercentage = round.calculatePercentCorrect();

        expect(winningPercentage).to.equal(66.67);
    })

    it('should output the round over message', function () {
        round.takeTurn('abc');
        round.takeTurn('gallbladder');
        round.takeTurn('playing with bubble wrap');
        const endMessage = round.endRound();

        expect(endMessage).to.equal('**Round Over** You answered 66.67% of the questions correctly')
    })
})