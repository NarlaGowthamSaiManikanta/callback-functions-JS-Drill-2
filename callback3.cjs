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
                        let listVsCards = {};
                        
                        for (let listID of data.listIDs) {
                            if (cards[listID]) {
                                listVsCards[listID] = cards[listID];
                            } else {
                                listVsCards[listID] = "N.A";
                            }
                        }

                        resolve(listVsCards);                        
                    }
                });
            } catch (error) {
                reject(error);
            }
        }, 2 * 1000);
    });
}

module.exports = findingListCards;