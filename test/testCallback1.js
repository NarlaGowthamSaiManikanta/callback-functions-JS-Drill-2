const {
    readFileData, findingBoardInformation
} = require('../callback1.cjs');

const directory = 'data';
const filename = 'boards_1.json';
const encoding = 'utf-8';
const boardID = 'mcu453ed';

readFileData(directory, filename, encoding, (boardsData) => {
    console.log("Board's Info :- ");
    return findingBoardInformation(boardsData, "id", boardID);
});