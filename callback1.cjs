const fs = require('fs');

function findingBoardInformation(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let filePath = `${data.directory}/${data.filename}`;

                fs.readFile(filePath, data.encoding, (err, boards) => {
                    if (err) {
                        throw err;
                    } else {
                        for (let board of JSON.parse(boards)) {
                            if (board[data.property] === data.value) {
                                resolve(board);
                            }
                        }

                        reject('Board is not Available');
                    }
                });
            } catch (error) {
                reject(error);
            }
        }, 2 * 1000);
    });
}

module.exports = findingBoardInformation;