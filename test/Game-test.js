const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', () => {
    it('should be a function', function () {
        expect(Game).to.be.a('function');
    })

    it('should start the game in the terminal', function () {
        const game = new Game();
        game.start();
    })
})