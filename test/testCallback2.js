const {
    readFileData, printListsOfSpecificBoard
} = require('../callback2.cjs');

const directory = 'data';
const filename = 'lists_1.json';
const encoding = 'utf-8';
const boardID = 'mcu453ed';

readFileData(directory, filename, encoding, (listData) => {
    console.log(`Lists of board with id = ${boardID}: -`);
    printListsOfSpecificBoard(listData, boardID);
})