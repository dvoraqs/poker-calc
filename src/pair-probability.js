module.exports = (cardsLeft) => {
    if (cardsLeft === 0) {
        return 0;
    } else if (cardsLeft === 14) {
        return 1;
    }

    return 1/13 + (cardsLeft === 3 ? 2 : 0) / 13 / 13;
};