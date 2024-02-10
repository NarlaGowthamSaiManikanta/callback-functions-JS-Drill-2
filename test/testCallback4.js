const getThanosBoardListsAndMindListInfo = require('../callback4.cjs');

const directory = 'data';
const encoding = 'utf-8';
const boardsFile = 'boards_1.json';
const listsFile = 'lists_1.json';
const cardsFile = 'cards_1.json';

getThanosBoardListsAndMindListInfo({
    directory, encoding, boardsFile, listsFile, cardsFile
}, (err, data) => {
    if (err) {
        console.log(err);
    }
});