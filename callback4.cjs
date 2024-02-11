const findingBoardInformation = require('./callback1.cjs');
const findingBoardLists = require('./callback2.cjs');
const findingListCards = require('./callback3.cjs');

function findingThanosBoardInfoListsAndMindList(data) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            findingBoardInformation(data)
                .then((board) => {
                    data.thanosBoardInfo = board;
                    data.boardID = board.id;
                    return findingBoardLists(data);
                })
                .then((lists) => {
                    data.thanosBoardLists = lists;
                
                    for (let list of lists) {
                        if (list.name === "Mind") {
                            data.listID = list.id;
                            return findingListCards(data);
                        }
                    }
                })
                .then((cards) => {
                    data.mindListCards = cards;
                    resolve(data);
                })
                .catch((rejectedReason) => {
                    reject(rejectedReason);
                });
        // }, 2 * 1000);
    });
}

module.exports = findingThanosBoardInfoListsAndMindList;