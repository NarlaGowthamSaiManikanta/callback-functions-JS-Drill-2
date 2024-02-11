const fs = require('fs');

function findingListCards(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let filePath = `${data.directory}/${data.cardsFilename}`;

                fs.readFile(filePath, data.encoding, (err, cards) => {
                    if (err) {
                        throw err;
                    } else {
                        cards = JSON.parse(cards);
                        
                        if (cards[data.listID]) {
                            resolve(cards[data.listID]);
                        } else {
                            reject(`Cards of List(${listID}) are not available.`);
                        }
                    }
                });
            } catch (error) {
                reject(error);
            }
        }, 2 * 1000);
    });
}

module.exports = findingListCards;