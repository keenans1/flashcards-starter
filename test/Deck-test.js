const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const prototypeData = require('../src/data.js')

describe('Deck', function () {

    // let deck;
    // beforeEach(() = deck = new Deck(prototypeData));

    it('should be a function', function () {
        expect(Deck).to.be.a('function');
    })

    it('should contain all cards', function () {
        const deck = new Deck(prototypeData);

        expect(deck.cards).to.deep.equal(prototypeData);
    })

    it('should count all cards', function () {
        const deck = new Deck(prototypeData);

        const totalCards = deck.countCards();

        expect(totalCards).to.equal(30);
    })
})