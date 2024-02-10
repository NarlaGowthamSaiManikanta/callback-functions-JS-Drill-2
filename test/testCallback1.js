const findingBoardInformation = require('../callback1.cjs');

const directory = 'data';
const boardsFilename = 'boards_1.json';
const encoding = 'utf-8';
const boardProperty = 'id';
const boardValue = 'mcu453ed';

findingBoardInformation({ directory, boardsFilename, encoding, boardProperty, boardValue })
    .then((board) => {
        console.log(board);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });