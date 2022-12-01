const data = require('./data');
const prototypeData = require('../src/data.js');
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = prototypeData;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.cards.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })

    const deck = new Deck(this.cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }
}

module.exports = Game;