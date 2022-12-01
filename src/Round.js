const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = deck.cards[0];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        this.turns++;
        this.currentCard = this.deck.cards[this.turns];
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(turn.card.id);
        }
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        const correctPercentage = ((1 - (this.incorrectGuesses.length / this.turns)) * 100).toFixed(2);
        return Number(correctPercentage);
    }

    endRound() {
        console.log(`**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly`);
        //return `**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly`;
    }
}

module.exports = Round;