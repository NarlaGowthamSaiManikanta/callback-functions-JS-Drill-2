const boardsInfo = require('./callback1.cjs');
const listsInfo = require('./callback2.cjs');
const cardsInfo = require('./callback3.cjs');

function getThanosBoardListsMindCardsAndSpaceCards(data, cb) {
    setTimeout(() => {
        try {
            let thanosBoardData;
            let thanosLists;
            let mintCards;
            let spaceCards;

            boardsInfo.readFileData(data.directory, data.boardsFile, data.encoding, (boardsData) => {
                console.log(`Thanos Board Information:- `);
                thanosBoardData = boardsInfo.findingBoardInformation(boardsData, "name", "Thanos");

                listsInfo.readFileData(data.directory, data.listsFile, data.encoding, (listsData) => {
                    console.log(`\nLists of Thanos Board:- `);
                    thanosLists = listsInfo.findingListsOfSpecificBoard(listsData, thanosBoardData.id);
                    
                    let mindListId;
                    let spaceListId;
                    for (let list of thanosLists) {
                        if (list.name === 'Mind') {
                            mindListId = list.id;
                        } else if (list.name === 'Space') {
                            spaceListId = list.id;
                        }
                    }

                    cardsInfo.readFileData(data.directory, data.cardsFile, data.encoding, (cardsData) => {
                        console.log(`\nCards of Mind List:- `);
                        mintCards = cardsInfo.findingCardsOfSpecificList(cardsData, mindListId);
                        return mintCards;
                    });

                    cardsInfo.readFileData(data.directory, data.cardsFile, data.encoding, (cardsData) => {
                        console.log(`\nCards of Space List:- `);
                        spaceCards = cardsInfo.findingCardsOfSpecificList(cardsData, spaceListId);
                        return spaceCards;
                    });

                    return thanosLists;
                });

                return thanosBoardData;
            });

            cb(null, {thanosBoardData, thanosLists, mintCards, spaceCards})
        } catch (err) {
            cb(err, null);
        }
    }, 2 * 1000);
}

module.exports = getThanosBoardListsMindCardsAndSpaceCards;