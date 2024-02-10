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

function findingCardsOfSpecificList(cardsData, listID) {
    let cardsDataOfListID = '';

    if (cardsData[listID]) {
        for (let card of cardsData[listID]) {
            for (let info in card) {
                cardsDataOfListID += `${info}: ${card[info]}\n`;
            }

            cardsDataOfListID += '\n';
        }
    } else {
        cardsDataOfListID = 'N.A.'
    }

    return cardsDataOfListID;
}

module.exports = {
    readFileData, findingCardsOfSpecificList
}