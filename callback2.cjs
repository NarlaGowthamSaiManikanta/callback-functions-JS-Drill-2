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

function findingListsOfSpecificBoard(listsData, boardID) {
    let listData = '';
        listsOfBoardID = listsData[boardID];
        for (let list of listsOfBoardID) {
            for (let info in list) {
                listData += `${info}: ${list[info]} `;
            }

            listData += '\n';
        }
    
        return listData;
}

module.exports = {
    readFileData, findingListsOfSpecificBoard
}