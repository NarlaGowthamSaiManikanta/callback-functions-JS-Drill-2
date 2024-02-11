const findingListCards = require('../callback3.cjs');

const directory = 'data';
const cardsFilename = 'cards_1.json';
const encoding = 'utf-8';
const listID = 'azxs123';

findingListCards({ directory, cardsFilename, encoding, listID })
    .then((cards) => {
        console.log(cards);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });