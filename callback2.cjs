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
                    if (requiredData) {
                        console.log(requiredData);
                    } else {
                        console.log('Return the appropiate data to function.');
                    }
                } else {
                    console.log(data);
                }
            }
        });
    }, 2000);
}

function findingListsOfSpecificBoard(listsData, boardID) {
    if (listsData[boardID]) {
        return listsData[boardID];
    } else {
        return 'N.A.';
    }
}

module.exports = {
    readFileData, findingListsOfSpecificBoard
}