const {
    readFileData, findingCardsOfSpecificList
} = require('../callback3.cjs');

const directory = 'data';
const filename = 'cards_1.json';
const encoding = 'utf-8';
const listID = 'qwsa221';

readFileData(directory, filename, encoding, (cardsData) => {
    console.log(`Cards of List with id = ${listID}: -`);
    return findingCardsOfSpecificList(cardsData, listID);
})