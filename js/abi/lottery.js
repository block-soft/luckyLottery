const lotteryAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "messages",
        "outputs": [
            {
                "name": "blocknumber",
                "type": "uint256"
            },
            {
                "name": "member",
                "type": "address"
            },
            {
                "name": "encrypted_texts_ipfs",
                "type": "string"
            },
            {
                "name": "decrypted_text_hash",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "playersTotal",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "finishBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "winnerPlayer",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "delayBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "allowEscrow",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_encrypted_texts_ipfs",
                "type": "string"
            },
            {
                "name": "_decrypted_text_hash",
                "type": "bytes32"
            }
        ],
        "name": "createMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isAllowed",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "plainTickets",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "plainTicketsTotal",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "winnerRand",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "gotWinner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "playerStats",
        "outputs": [
            {
                "name": "playerTotalTickets",
                "type": "uint256"
            },
            {
                "name": "playerIndex",
                "type": "uint256"
            },
            {
                "name": "isValid",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "leftTickets",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalTickets",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "escrow",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pricePerTicket",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "buyTicket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "messagesTotal",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "players",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_tickets",
                "type": "uint256"
            },
            {
                "name": "_price",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];

const obj = {
    lottery : false
};

export const init = async function (address) {
    obj.lottery = web3.eth.contract(lotteryAbi).at(address);
};

export const owner = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.owner.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

export const leftTickets = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.leftTickets.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

export const totalTickets = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.totalTickets.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

export const pricePerTicket = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.pricePerTicket.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

export const winnerPlayer = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.winnerPlayer.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                let addr = data.toString();
                if (addr == '0x0000000000000000000000000000000000000000') {
                    addr = '';
                }
                resolve(addr);
            }
        });
    });
};

export const winnerRand = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.winnerRand.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

export const finishBlock = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.finishBlock.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};


export const isAllowed = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.isAllowed.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

export const playersTotal = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.playersTotal.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

const playerByIndex = async function (index) {
    return new Promise((resolve, reject) => {
        obj.lottery.players(index, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

const playerStat = async function (addr) {
    return new Promise((resolve, reject) => {
        obj.lottery.playerStats(addr, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString().split(','));
            }
        });
    });
};

export const playersList = async function () {
    let list = [];
    const total = await playersTotal();
    if (total < 1) return false;

    for (let i = 0; i < total; i++) {
        let current = await playerByIndex(i);
        let data = await playerStat(current);
        let object ={'addr' : current, 'tickets' : data[0]};
        list.push(object);
    }
    return list;
};


export const buyTicket = async function (sum) {
    return new Promise((resolve, reject) => {
        obj.lottery.buyTicket({value:sum}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const gotWinner = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.gotWinner((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const allowEscrow = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.allowEscrow((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const escrow = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.escrow((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const createMessage = async function (ipfsHash, decryptedTextHash) {
    return new Promise((resolve, reject) => {
        obj.lottery.createMessage(ipfsHash, decryptedTextHash, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const messagesTotal = async function () {
    return new Promise((resolve, reject) => {
        obj.lottery.messagesTotal.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

const messageByIndex = async function (index) {
    return new Promise((resolve, reject) => {
        obj.lottery.messages(index, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let tmp = data.toString().split(',');
                resolve({block: tmp[0], member: tmp[1], ipfs: tmp[2], check: tmp[3]});
            }
        });
    });
};

export const messagesList = async function () {
    const list = [];
    const total = await messagesTotal();
    if (total < 1) return false;
    for(let i = 0; i < total; i++) {
        let current = await messageByIndex(i);

        list.push(current);
    }
    return list;
};
