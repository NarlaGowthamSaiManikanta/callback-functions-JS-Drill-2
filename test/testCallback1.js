const findingBoardInformation = require('../callback1.cjs');

const directory = 'data';
const filename = 'boards_1.json';
const encoding = 'utf-8';
const property = 'id';
const value = 'mcu453ed';

findingBoardInformation({directory, filename, encoding, property, value})
    .then((board) => {
        console.log(board);
    })
    .catch((rejectedReason) => {
        console.log(rejectedReason);
    });