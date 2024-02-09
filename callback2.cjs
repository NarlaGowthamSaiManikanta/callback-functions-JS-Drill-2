const fs = require('fs');

function readFileData(directory, filename, encoding, cb) {
    setTimeout(() => {
        let filepath = `${directory}/${filename}`;
        fs.readFile(filepath, encoding, (err, data) => {
            if (err) {
                throw err;
            } else {
                if (typeof cb === 'function') {
                    cb(JSON.parse(data));
                } else {
                    console.log(data);
                }
            }
        });
    }, 2000);
}

function printListsOfSpecificBoard(listsData, boardID) {
    setTimeout(() => {
        listsOfBoardID = listsData[boardID];
        for (let list of listsOfBoardID) {
            let listData = '';

            for (let info in list) {
                listData += `${info}: ${list[info]} `;
            }

            console.log(listData);
        }
    }, 2000);
}

module.exports = {
    readFileData, printListsOfSpecificBoard
}