const chai = require('chai');
const expect = chai.expect;
const prototypeData = require('../src/data.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    })

    it('should ...', () => {
        const game = new Game();
        game.start();
    })
})