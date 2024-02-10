const findingBoardLists = require('../callback2.cjs');

const directory = 'data';
const listsFilename = 'lists_1.json';
const encoding = 'utf-8';
const boardID= 'mcu453ed';

findingBoardLists({ directory, listsFilename, encoding, boardID })
    .then((lists) => {
        console.log(lists);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });