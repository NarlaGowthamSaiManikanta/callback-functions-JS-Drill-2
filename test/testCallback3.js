const findingListCards = require('../callback3.cjs');

const directory = 'data';
const cardsFilename = 'cards_1.json';
const encoding = 'utf-8';
const listIDs = ['azxs123'];

findingListCards({ directory, cardsFilename, encoding, listIDs })
    .then((cards) => {
        console.log(cards);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });