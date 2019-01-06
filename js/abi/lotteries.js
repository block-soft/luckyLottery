const lotteriesAbi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "lotteries",
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
        "constant": false,
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
            }
        ],
        "name": "createLottery",
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
        "name": "lotteryNames",
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
        "inputs": [],
        "name": "lotteriesTotal",
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
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];

const lotteriesAddress = '0x43d928330c365056232bdd3bd3f88e5d06f0cfbf';

const lotteries = web3.eth.contract(lotteriesAbi).at(lotteriesAddress);

export const createLottery = async function (title, tickets, price) {
    return new Promise((resolve, reject) => {
        lotteries.createLottery(title, tickets, price, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const lotteriesTotal = async function () {
    return new Promise((resolve, reject) => {
        lotteries.lotteriesTotal.call((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

const lotteryByIndex = async function (index) {
    return new Promise((resolve, reject) => {
        lotteries.lotteries(index, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

const lotteryName = async function (addr) {
    return new Promise((resolve, reject) => {
        lotteries.lotteryNames(addr, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(web3.toAscii(data));
            }
        });
    });
};

export const lotteriesList = async function () {
    let list = [];
    const total = await lotteriesTotal();
    if (total < 1) return false;

    let saved = JSON.parse(localStorage.getItem('currentLotteries_' + lotteriesAddress));
    let start = 0;
    if (saved && saved.list) {
        start = saved.index + 1;
        list = saved.list;
    }
    for (let i = start; i < total; i++) {
        let current = await lotteryByIndex(i);
        let name = await lotteryName(current);
        let object ={'addr' : current, 'name' : name};
        list.push(object);
        localStorage.setItem('currentLotteries_' + lotteriesAddress, JSON.stringify({'list' : list, 'index' : i}));
    }
    return list;
};
