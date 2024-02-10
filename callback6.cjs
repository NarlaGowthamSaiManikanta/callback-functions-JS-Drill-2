const boardsInfo = require('./callback1.cjs');
const listsInfo = require('./callback2.cjs');
const cardsInfo = require('./callback3.cjs');

function getThanosBoardListsAndAllCards(data, cb) {
    setTimeout(() => {
        try {
            let thanosBoardData;
            let thanosLists;
            let thanosBoardCards = {};

            boardsInfo.readFileData(data.directory, data.boardsFile, data.encoding, (boardsData) => {
                console.log(`Thanos Board Information:- `);
                thanosBoardData = boardsInfo.findingBoardInformation(boardsData, "name", "Thanos");

                listsInfo.readFileData(data.directory, data.listsFile, data.encoding, (listsData) => {
                    console.log(`\nLists of Thanos Board:- `);
                    thanosLists = listsInfo.findingListsOfSpecificBoard(listsData, thanosBoardData.id);
                    
                    for (let list of thanosLists) {
                        cardsInfo.readFileData(data.directory, data.cardsFile, data.encoding, (cardsData) => {
                            console.log(`\nCards of ${list.name} List:- `);
                            thanosBoardCards[list.name] = cardsInfo.findingCardsOfSpecificList(cardsData, list.id);
                            return thanosBoardCards[list.name];
                        });
                    }

                    return thanosLists;
                });

                return thanosBoardData;
            });

            cb(null, {thanosBoardData, thanosLists, thanosBoardCards});
        } catch (err) {
            cb(err, null);
        }
    }, 2 * 1000);
}

module.exports = getThanosBoardListsAndAllCards;