const currentUser = {
    account: '',
    publicKey: 'loading',
    privateKey: 'loading'
};
const currentLottery = {
    addr : '',
    loadedMembers : {},
    loadedKeys : [],
    winner : false,
    ticketsPrice : 0,
    leftTickets : false
};
let tmp = JSON.parse(localStorage.getItem('currentLottery'));
if (tmp && tmp.addr) {
    currentLottery.addr = tmp.addr;
}
const currentIPFS = {
    node : false
};

async function init() {
    if (!web3) return false;
    document.getElementById('loadingCheck1').className = "material-icons tiny check green-text";
    document.getElementById('loadingText1').className = "green-text";
    await ethereum.enable();
    web3.eth.getAccounts((err, accounts) => {
        if (err) {
            console.error(err);
        } else if (!accounts || accounts.length == 0 || !accounts[0]) {
            console.log('accounts', accounts);
        } else {
            document.getElementById('loadingCheck2').className = "material-icons tiny check green-text";
            document.getElementById('loadingText2').className = "green-text";
            web3.version.getNetwork((err, network) => {
                if (err) {
                    console.error(err);
                } else if (network != 3) {
                    console.log('network', network);
                } else {
                    document.getElementById('loadingCheck3').className = "material-icons tiny check green-text";
                    document.getElementById('loadingText3').className = "green-text";
                    currentUser.account = accounts[0];
                    initMembers();
                    initLotteries();
                    initTickets(currentLottery.addr);
                    setTimeout(() => {
                        document.getElementById('loaded').style.display = 'block';
                        document.getElementById('loading').style.display = 'none';
                    }, 800);
                    document.getElementById('loadedAccount').innerText = accounts[0];
                }
            });

        }
    });

    currentIPFS.node = IpfsHttpClient('ipfs.infura.io', '5001', {protocol: 'https'});
    document.getElementById('loadingCheck4').className = "material-icons tiny check green-text";
    document.getElementById('loadingText4').className = "green-text";
    document.getElementById('loadedCheck4').className = "material-icons tiny check green-text";
    document.getElementById('loadedText4').className = "green-text";
    currentIPFS.node.version((error, version) => {
        console.log('ipfs Version', version);
    });
    currentIPFS.node.id((error, id) => {
        console.log('ipfs ID', id);
        document.getElementById('ipfsID').innerText = ' Current Node: ' + id.id;
        document.getElementById('ipfsID2').innerText = ' Current Node: ' + id.id;
    });
}
