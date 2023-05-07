import request from 'request';
import {
    getWeb3
} from '../web3/web3';

import Caver from 'caver-js';
const caver = new Caver('https://api.baobab.klaytn.net:8651');
let wallet = caver.klay.accounts.createWithAccountKey('0x6A12A3909D0737d7e4CDeDB3Cde300406700d672', '0xb1cfbca1ae8245638921bd5e1db5ec92cb99ddf6d334c9773d725b229706d8a8');
caver.klay.accounts.wallet.add(wallet);

const account = wallet.address


const registTicket = async (TICKET) => {
    try {
        const {instance, account} = await getWeb3();

        // const TICKET = {...req.body};

        const buyTicketResult = await instance.methods.BuyTicket(
            TICKET.concertId,
            TICKET.ticketId,
            TICKET.date,
            TICKET.time,
            TICKET.seat,
            TICKET.discount,
            TICKET.price,
            TICKET.discountRate,
            TICKET.fee,
            TICKET.cancleDate,
            TICKET.cancleFee,
        ).send(
            {gas: 1000000, from: account.address});
            console.log(buyTicketResult);


            return buyTicketResult;
      

    } catch (e) {
        console.log(e);
        return e;
    }
}

const buyTicket = async (req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const TICKET = {...req.body};

        const buyTicketByFirstTicketer = await instance.methods.BuyTicketByFirstTicketer(
            TICKET.concertId,
            TICKET.ticketId,
            TICKET.ticketerName,
            TICKET.ticketerPhoneNumber,
            TICKET.ticketerEmail,
        ).send(
            {gas: 1000000, from: account.address});

        registTicket(TICKET).then(function(result){
            console.log(result);        
             
            console.log(buyTicketByFirstTicketer);
    
    
            return buyTicketByFirstTicketer;
        })




    } catch (e) {
        console.log(e);
        return e;
    }
}

const getTicket = async(req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const ticketArr = await instance.methods.GetTicketByConcertId(req.query.concertId, req.query.ticketId).call();
        const firstTicketer = await instance.methods.GetFirstTicketer(req.query.concertId, req.query.ticketId).call();
        const transferTicketer = await instance.methods.GetTransferTicketer(req.query.concertId, req.query.ticketId).call();
        
        // ticketArr.firstTicketer = firstTicketer;
        // ticketArr.transferTicketer = transferTicketer;

        console.log(ticketArr);
        console.log(firstTicketer);
        console.log(transferTicketer);

        return ticketArr +","+ firstTicketer +","+ transferTicketer;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const updateTicket = async(req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const ticket = {...req.body};

        const updatedTicket = await instance.methods.UpdateTicket(
            ticket.concertId,
            ticket.ticketId,
            ticket.date,
            ticket.time,
            ticket.seat,
            ticket.discount,
            ticket.price,
            ticket.discountRate,
            ticket.fee,
            ticket.cancleDate,
            ticket.cancleFee,
        ).send(
            {gas: 1000000, from: account.address});

        console.log(updatedTicket);

        return updatedTicket;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const deleteTicket = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        return e;
    }
}

const buyTicketByTransferTicketer = async (req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const transferTicketer = {...req.body};

        const transferTicketerInfo = await instance.methods.BuyTicketByTransferTicketer(
            transferTicketer.concertId,
            transferTicketer.ticketId,
            transferTicketer.transferTicketerName,
            transferTicketer.transferTicketerPhoneNumber,
            transferTicketer.transferTicketerEmail,
        ).send(
            {gas: 1000000, from: account.address});
        console.log(transferTicketerInfo);

        return transferTicketerInfo;

    } catch (e) {
        console.log(e);
        return e;
    }
}

export {
    registTicket,
    buyTicket,
    getTicket,
    updateTicket,
    deleteTicket,
    buyTicketByTransferTicketer,
};
