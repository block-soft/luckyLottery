const BLOCKS_TO_WAIT = 3;

async function initTickets(addr) {
    currentLottery.indexInitTickets = 0;
    currentLottery.finishBlockInterval = false;
    console.log('init lottery tickets for', addr);
    if (!addr) {
        document.getElementById('ticketsLoaded').innerHTML = 'please select lottery';
        return false;
    }

    document.getElementById('menuStep1').style.display = 'block';
    document.getElementById('menuStep2').style.display = 'none';
    document.getElementById('menuStep3').style.display = 'none';
    document.getElementById('menuStep3_2').style.display = 'none';
    document.getElementById('menuStep4').style.display = 'none';
    document.getElementById('menuStep5').style.display = 'none';

    const lottery = await import('../abi/lottery.js');
    lottery.init(addr);
    document.getElementById('ticketsLoaded').innerHTML = `
        <ul class="collection left-align">
        <li class="collection-item">        
         <label class="orange-text">Total Tickets <span class="badge" id="loadedTotalTickets">?</span></label>
        </li>
        <li class="collection-item">         
         <label class="orange-text">Left Tickets <span class="badge active" id="loadedLeftTickets">?</span></label>        
        </li>
        <li class="collection-item">
         <label class="orange-text">Price Per Ticket <span class="badge" id="loadedPricePerTicket">?</span></label>
        </li>
        <li class="collection-item">
         <label class="orange-text">Winner Player <span class="badge" id="loadedWinnerPlayer">?</span></label>
        </li>
        <li class="collection-item">
         <label class="orange-text">Winner Rand <span class="badge" id="loadedWinnerRand">?</span></label>
        </li>
        <li class="collection-item">
         <label class="orange-text">Finish Block <span class="badge" id="loadedFinishBlock">?</span></label>
        </li>
        <li class="collection-item">        
         <label class="orange-text">Owner <span class="badge" id="loadedOwner">?</span></label>
        </li>
        <li class="collection-item">
         <label class="orange-text">Is Escrow Allowed <span class="badge" id="loadedIsAllowed">?</span></label>
        </li>
        <li class="collection-item">
         <label class="orange-text">Players Total <span class="badge" id="loadedPlayersTotal">?</span></label>
        </li>
        <li class="collection-item">
            <div id="loadedPlayers"></div>
        </li>
        </ul>
    `;
    lottery.owner().then(data => {
        document.getElementById('loadedOwner').innerHTML = data;
        currentLottery.owner = data;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.totalTickets().then(data => {
        document.getElementById('loadedTotalTickets').innerHTML = data;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.leftTickets().then(data => {
        document.getElementById('loadedLeftTickets').innerHTML = data;
        currentLottery.leftTickets = data;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.pricePerTicket().then(data => {
        document.getElementById('loadedPricePerTicket').innerHTML = (data / 1000000000000000000) + ` (ETH)`;
        currentLottery.ticketsPrice = data;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.winnerPlayer().then(data => {
        currentLottery.winner = data;
        if (currentLottery.winner == currentUser.account) {
            document.getElementById('loadedWinnerPlayer').innerHTML = '<b>YOU ARE THE WINNER</b>';
        } else {
            document.getElementById('loadedWinnerPlayer').innerHTML = data;
        }
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.winnerRand().then(data => {
        document.getElementById('loadedWinnerRand').innerHTML = data;
        currentLottery.winnerRand = data;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.finishBlock().then(data => {
        document.getElementById('loadedFinishBlock').innerHTML = data;
        currentLottery.finishBlock = data * 1;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.playersTotal().then(data => {
        document.getElementById('loadedPlayersTotal').innerHTML = data;
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.isAllowed().then(data => {
        document.getElementById('loadedIsAllowed').innerHTML = data;
        currentLottery.isAllowed = data === 'true';
        currentLottery.indexInitTickets++;
        finishInitTickets();
    });
    lottery.playersList().then(data => {
        let html = '';
        if (data.length > 0) {
            for (let i =  0, ic = data.length; i < ic; i++) {
                if (currentUser.account == data[i].addr) {
                    html += `<li><label class="green-text">Your tickets : ${data[i].tickets}</label></li>`;
                } else {
                    html += `<li><label>${data[i].addr} : ${data[i].tickets}</label></li>`;
                }
            }
            html = '<b>Players</b> <ul> ' + html + ' </ul>';
        }
        document.getElementById('loadedPlayers').innerHTML = html;
    });
}

function checkBlockTimer() {
    web3.eth.getBlockNumber((error, block) => {
        let txt = '';
        if (block >=  currentLottery.finishBlock + BLOCKS_TO_WAIT) {
            txt = '<a href="#" onclick="gotWinner(); return false;">Find a Winner!</a>';
        } else {
            txt = `Plz wait ${currentLottery.finishBlock + BLOCKS_TO_WAIT - block} blocks`;
        }
        document.getElementById('loadedWinnerPlayer').innerHTML = txt;
    });
}

function finishInitTickets() {
    if ( currentLottery.indexInitTickets < 9) return false;
    if (currentLottery.owner === '0x') {
        document.getElementById('menuStep1').style.display = 'none';
        document.getElementById('menuStep2').style.display = 'none';
        document.getElementById('menuStep3').style.display = 'none';
        document.getElementById('menuStep3_2').style.display = 'none';
        document.getElementById('menuStep4').style.display = 'none';
        document.getElementById('menuStep5').style.display = 'block';
    } else if (currentLottery.isAllowed) {
        document.getElementById('menuStep1').style.display = 'none';
        document.getElementById('menuStep2').style.display = 'none';
        document.getElementById('menuStep3').style.display = 'none';
        document.getElementById('menuStep3_2').style.display = 'none';
        document.getElementById('menuStep4').style.display = 'block';
        document.getElementById('menuStep5').style.display = 'none';
    } else if (currentLottery.winner) {
        document.getElementById('menuStep1').style.display = 'none';
        document.getElementById('menuStep2').style.display = 'none';
        if (currentLottery.winner == currentUser.account) {
            document.getElementById('menuStep3').style.display = 'block';
        } else {
            document.getElementById('menuStep3_2').style.display = 'none';
        }
        document.getElementById('menuStep4').style.display = 'none';
        document.getElementById('menuStep5').style.display = 'none';
    } else if (currentLottery.leftTickets === "0") {
        web3.eth.getBlockNumber((error, block) => {
            let txt = '';
            if (block >=  currentLottery.finishBlock + BLOCKS_TO_WAIT) {
                txt = '<a href="#" onclick="gotWinner(); return false;">Find a Winner!</a>';
            } else {
                txt = `Plz wait ${currentLottery.finishBlock + BLOCKS_TO_WAIT - block} blocks`;
                if (currentLottery.finishBlockInterval) {
                    clearInterval(currentLottery.finishBlockInterval);
                }
                currentLottery.finishBlockInterval = setInterval(checkBlockTimer, 100);
            }
            document.getElementById('loadedWinnerPlayer').innerHTML = txt;
        });
        document.getElementById('menuStep1').style.display = 'none';
        document.getElementById('menuStep2').style.display = 'block';
        document.getElementById('menuStep3').style.display = 'none';
        document.getElementById('menuStep3_2').style.display = 'none';
        document.getElementById('menuStep4').style.display = 'none';
        document.getElementById('menuStep5').style.display = 'none';
    } else {
        document.getElementById('menuStep1').style.display = 'block';
        document.getElementById('menuStep2').style.display = 'none';
        document.getElementById('menuStep3').style.display = 'none';
        document.getElementById('menuStep3_2').style.display = 'none';
        document.getElementById('menuStep4').style.display = 'none';
        document.getElementById('menuStep5').style.display = 'none';
        document.getElementById('loadedWinnerPlayer').innerHTML = 'All tickets must be sold';
    }

    document.getElementById('ticketsLoading').style.display = 'none';
}

async function buyTicketModal() {
    const modal = M.Modal.getInstance(document.getElementById('buyTicketModal'));
    document.getElementById('buyTicketModalPrice').innerText = (currentLottery.ticketsPrice / 1000000000000000000) + ` (ETH)`;
    modal.open();
}

async function gotWinner() {
    const lottery = await import('../abi/lottery.js');
    lottery.init(currentLottery.addr);
    const tx = await lottery.gotWinner();
    _updateTicketsStatus(tx);
}


async function allowEscrow() {
    const lottery = await import('../abi/lottery.js');
    lottery.init(currentLottery.addr);
    const tx = await lottery.allowEscrow();
    _updateTicketsStatus(tx);
}


async function escrow() {
    const lottery = await import('../abi/lottery.js');
    lottery.init(currentLottery.addr);
    const tx = await lottery.escrow();
    _updateTicketsStatus(tx);
}

async function saveBuyTicketModal() {
    const number = document.getElementById('buyTicketModalNumber').value;
    const weis = number * currentLottery.ticketsPrice;

    const lottery = await import('../abi/lottery.js');
    lottery.init(currentLottery.addr);
    const tx = await lottery.buyTicket(weis);
    _updateTicketsStatus(tx);
    const chatRoomModal = M.Modal.getInstance(document.getElementById('buyTicketModal'));
    chatRoomModal.close();
}

function _updateTicketsStatus(tx) {
    document.getElementById('ticketsTxWaiting').style.display = 'block';
    document.getElementById('ticketsTxWaitingLink').innerHTML = `<a href="https://ropsten.etherscan.io/tx/${tx}" target="_blank">${tx}</a>`;
    const latestFilter = web3.eth.filter('latest');
    latestFilter.watch(function (error, result) {
        if (error) {
            console.error(error);
        } else {
            web3.eth.getBlock(result, true, function (error, data) {
                for (let i = 0, ic = data.transactions.length; i < ic; i++) {
                    if (tx == data.transactions[i].hash) {
                        document.getElementById('ticketsTxWaiting').style.display = 'none';
                        initTickets(currentLottery.addr);
                        latestFilter.stopWatching();
                        break;
                    }
                }
            });
        }
    });
}
