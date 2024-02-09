const fs = require('fs');

function readFileData(directory, filename, encoding, cb) {
    setTimeout(() =>{
        let filepath = `${directory}/${filename}`;
        fs.readFile(filepath, encoding, (err, data) => {
            if(err) {
                throw err;
            } else {
                if(typeof cb === 'function'){
                    cb(JSON.parse(data));
                } else{
                    console.log(data);
                }
            }
        });
    }, 2000);
}

function printBoardInformation(boardsData, boardID) {
    setTimeout(() => {
        for (let board of boardsData) {
            if(board.id === boardID) {
                for (let info in board) {
                    if (!board[info] || Object.keys(board[info]).length === 0) {
                        board[info] = 'NA';
                    }
                    console.log(`${info}: ${board[info]}`);
                }
            }
        }
    }, 2000)
}

module.exports = {
    readFileData, printBoardInformation
}