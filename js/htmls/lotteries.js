async function initLotteries() {
    console.log('init lotteries');
    const lotteries = await import('../abi/lotteries.js');
    const list = await lotteries.lotteriesList();
    document.getElementById('lotteriesLoading').style.display = 'none';
    if (!list) {
        document.getElementById('lotteriesLoaded').style.display = 'none';
        return '';
    }
    let html = '<div class="collection left-align">';
    for (let i =  list.length-1; i >= 0; i--) {
        let css = 'collection-item';
        if (currentLottery && currentLottery.addr == list[i].addr) {
            css += ' active';
        }
        html += `<a id="listLottery_${list[i].addr}" class="${css}" href="https://ropsten.etherscan.io/address/${list[i].addr}" onclick="selectLottery('${list[i].addr}'); return false;">
                <label class="orange-text">${list[i].name}</label>
            </a>`;
    }
    html += '</div>';
    document.getElementById('lotteriesLoaded').innerHTML = html;
}

async function createNewLotteryModal() {
    const modal = M.Modal.getInstance(document.getElementById('newLotteryModal'));
    modal.open();
}

async function saveNewLotteryModal() {
    const title = document.getElementById('newLotteryModalName').value;
    const tickets = document.getElementById('newLotteryModalTickets').value;
    const price = document.getElementById('newLotteryModalTicketPrice').value;

    const lotteries = await import('../abi/lotteries.js');
    const tx = await lotteries.createLottery(title, tickets, price * 1000000000000000000);
    document.getElementById('lotteriesTxWaiting').style.display = 'block';
    document.getElementById('lotteriesTxWaitingLink').innerHTML = `<a href="https://ropsten.etherscan.io/tx/${tx}" target="_blank">${tx}</a>`;
    const latestFilter = web3.eth.filter('latest');
    latestFilter.watch(function (error, result) {
        if (error) {
            console.error(error);
        } else {
            web3.eth.getBlock(result, true, function (error, data) {
                for (let i = 0, ic = data.transactions.length; i < ic; i++) {
                    if (tx == data.transactions[i].hash) {
                        document.getElementById('lotteriesTxWaiting').style.display = 'none';
                        initLotteries();
                        latestFilter.stopWatching();
                        break;
                    }
                }
            });
        }
    });
    const chatRoomModal = M.Modal.getInstance(document.getElementById('newLotteryModal'));
    chatRoomModal.close();
}

async function selectLottery(addr) {
    if (currentLottery.addr == addr) return false;
    currentLottery.loadedKeys = [];
    if (currentLottery.addr && document.getElementById('listLottery_' + currentLottery.addr)) {
        document.getElementById('listLottery_' + currentLottery.addr).className = 'collection-item';
    }
    if (document.getElementById('listLottery_' + addr)) {
        document.getElementById('listLottery_' + addr).className = 'collection-item active';
    }
    currentLottery.addr = addr;
    localStorage.setItem('currentLottery', JSON.stringify(currentLottery));
    initTickets(currentLottery.addr);
}
