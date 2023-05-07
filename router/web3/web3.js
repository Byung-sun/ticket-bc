
import ticket_artifacts from '../../build/contracts/TicketContract.json';
import Caver from 'caver-js';

const getWeb3 = async() => {
    // const Ticket = contract(ticket_artifacts);
    // // const infuraKey = "3ff90488f0a8481799f25db95e8ffd06";
    // const caver = new Caver('https://api.baobab.klaytn.net:8651');
    // //const web3 = new Web3(`https://ropsten.infura.io/v3/${infuraKey}`);
    // Ticket.setProvider(caver.currentProvider);
    // const instance = await Ticket.deployed();
    
    // let wallet = caver.klay.accounts.createWithAccountKey('0x6A12A3909D0737d7e4CDeDB3Cde300406700d672', '0xb1cfbca1ae8245638921bd5e1db5ec92cb99ddf6d334c9773d725b229706d8a8');
    // caver.klay.accounts.wallet.add(wallet);

    // const account = wallet.address


    let caver = new Caver('https://api.baobab.klaytn.net:8651')

    const instance = new caver.klay.Contract(
        ticket_artifacts.abi , ticket_artifacts.networks['1001']['address']
    )

    let account = caver.klay.accounts.createWithAccountKey('0x6A12A3909D0737d7e4CDeDB3Cde300406700d672', '0xb1cfbca1ae8245638921bd5e1db5ec92cb99ddf6d334c9773d725b229706d8a8')

    caver.klay.accounts.wallet.add(account)


  
    return {instance, account};
}

export {
    getWeb3,
}