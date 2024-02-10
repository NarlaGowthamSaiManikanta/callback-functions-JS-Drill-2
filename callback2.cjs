const fs = require('fs');

function findingBoardLists(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let filePath = `${data.directory}/${data.listsFilename}`;

                fs.readFile(filePath, data.encoding, (err, lists) => {
                    if (err) {
                        throw err;
                    } else {
                        lists = JSON.parse(lists);
                        
                        if (lists[data.boardID]) {
                            resolve(lists[data.boardID]);
                        } else {
                            reject('Board Lists are not Available');
                        }
                    }
                });
            } catch (error) {
                reject(error);
            }
        }, 2 * 1000);
    });
}

module.exports = findingBoardLists;