const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    it('should be a function', function () {
        expect(Deck).to.be.a('function');
    })

    it('should contain all cards', function () {
        expect(deck).to.deep.equal(deck);
    })

    it('should count all cards', function () {
        const totalCards = deck.countCards();

        expect(totalCards).to.equal(3);
    })
})