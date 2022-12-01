class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    countCards() {
        let cardCount = 0;
        this.cards.forEach(() => cardCount++)
        return cardCount;
    }
}

module.exports = Deck;