const chai = require('chai');
const expect = chai.expect;
const prototypeData = require('../src/data.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {

    it('should be a function', function () {
        expect(Round).to.be.a('function');
    })
})