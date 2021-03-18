import contract from 'truffle-contract';
import ticket_artifacts from '../../build/contracts/TicketContract.json';
import Web3 from 'web3';

const getWeb3 = async() => {
    const Ticket = contract(ticket_artifacts);
    const infuraKey = "3ff90488f0a8481799f25db95e8ffd06";
    const web3 = new Web3('http://localhost:7545');
    //const web3 = new Web3(`https://ropsten.infura.io/v3/${infuraKey}`);
    Ticket.setProvider(web3.currentProvider);
    const instance = await Ticket.deployed();
    const account = await web3.eth.getAccounts();
  
    return { instance, account };
}

export {
    getWeb3,
}