import contract from 'truffle-contract';
import ticket_artifacts from '../../build/contracts/TicketContract.json';
import Web3 from 'web3';

const getWeb3 = async() => {
    const Ticket = contract(ticket_artifacts);
    const infuraKey = "e00bb03549ce401d9fbda05a0f910269";
    // const web3 = new Web3('http://localhost:7545');
    const web3 = new Web3(`https://ropsten.infura.io/v3/${infuraKey}`);
    Ticket.setProvider(web3.currentProvider);
    const instance = await Ticket.deployed();
    const account = await web3.eth.getAccounts();
  
    return { instance, account };
}

export {
    getWeb3,
}