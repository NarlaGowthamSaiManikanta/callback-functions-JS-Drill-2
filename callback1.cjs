const fs = require('fs');

function readFileData(directory, filename, encoding, cb) {
    setTimeout(() => {
        let filepath = `${directory}/${filename}`;
        fs.readFile(filepath, encoding, (err, data) => {
            if (err) {
                throw err;
            } else {
                if (typeof cb === 'function') {
                    let requiredData = cb(JSON.parse(data));
                    console.log(requiredData);
                } else {
                    console.log(data);
                }
            }
        });
    }, 2000);
}

function findingBoardInformation(boardsData, boardID) {
    let boardInfo = "";

    for (let board of boardsData) {
        if (board.id === boardID) {
            for (let info in board) {
                if (!board[info] || Object.keys(board[info]).length === 0) {
                    board[info] = 'NA';
                }
                boardInfo = boardInfo.concat(`${info}: ${board[info]}\n`);
            }
        }
    }

    return boardInfo;
}

module.exports = {
    readFileData, findingBoardInformation
}