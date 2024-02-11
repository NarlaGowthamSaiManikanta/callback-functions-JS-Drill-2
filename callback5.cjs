const findingBoardInformation = require('./callback1.cjs');
const findingBoardLists = require('./callback2.cjs');
const findingListCards = require('./callback3.cjs');

function findingThanosBoardInfoListsMindCardsAndSpaceCards(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            findingBoardInformation(data)
                .then((board) => {
                    data.thanosBoardInfo = board;
                    data.boardID = board.id;
                    return findingBoardLists(data);
                })
                .then((lists) => {
                    data.thanosBoardLists = lists;
                    data.listIDs = [];

                    for (let list of lists) {
                        if (list.name === "Mind" || list.name === "Space") {
                            data.listIDs.push(list.id);
                        }
                    }

                    return findingListCards(data);
                })
                .then((cards) => {
                    data.listCards = cards;
                    resolve(data);
                })
                .catch((rejectedReason) => {
                    reject(rejectedReason);
                });
        }, 2 * 1000);
    });
}

module.exports = findingThanosBoardInfoListsMindCardsAndSpaceCards;