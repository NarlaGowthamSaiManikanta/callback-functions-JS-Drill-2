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
    let listsDataOfBoardID = '';
    
    if (listsData[boardID]) {
        for (let list of listsData[boardID]) {
            for (let info in list) {
                listsDataOfBoardID += `${info}: ${list[info]} `;
            }

            listsDataOfBoardID += '\n';
        }
    } else {
        listsDataOfBoardID = 'N.A.'
    }

    return listsDataOfBoardID;
}

module.exports = {
    readFileData, findingListsOfSpecificBoard
}