const findingThanosBoardInfoListsAndMindList = require('../callback4.cjs');

const directory = 'data';
const boardsFilename = 'boards_1.json';
const listsFilename = 'lists_1.json';
const cardsFilename = 'cards_1.json';
const encoding = 'utf-8';
const boardProperty = 'name';
const boardValue = 'Thanos';

const data = {
    directory, boardsFilename, listsFilename, cardsFilename, encoding, boardProperty, boardValue
};

findingThanosBoardInfoListsAndMindList(data)
    .then((data) => {
        console.log(data.thanosBoardInfo);
        console.log(data.thanosBoardLists);
        console.log(data.mindListCards);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });