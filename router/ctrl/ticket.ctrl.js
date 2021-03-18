import request from 'request';
import {
    getWeb3
} from '../web3/web3';

const registTicket = async (TICKET) => {
    try {
        const { instance, account } = await getWeb3();

        // const TICKET = {...req.body};

        const buyTicketResult = await instance.BuyTicket(
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
            {gas: 1000000, from: account[0]}
        );
            console.log(buyTicketResult);


            return buyTicketResult;
      

    } catch (e) {
        console.log(e);
        return e;
    }
}

const buyTicket = async (req, res) => {
    try {
        const { instance, account } = await getWeb3();

        const TICKET = {...req.body};

        const buyTicketByFirstTicketer = await instance.BuyTicketByFirstTicketer(
            TICKET.concertId,
            TICKET.ticketId,
            TICKET.ticketerName,
            TICKET.ticketerPhoneNumber,
            TICKET.ticketerEmail,
            {gas: 1000000, from: account[0]}
        );

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
        const { instance, account } = await getWeb3();

        const ticketArr = await instance.GetTicketByConcertId.call(req.query.concertId, req.query.ticketId);
        const firstTicketer = await instance.GetFirstTicketer.call(req.query.concertId, req.query.ticketId);
        const transferTicketer = await instance.GetTransferTicketer.call(req.query.concertId, req.query.ticketId);
        
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
        const { instance, account } = await getWeb3();

        const ticket = {...req.body};

        const updatedTicket = await instance.UpdateTicket(
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
            {gas: 1000000, from: account[0]}
        );

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
        const { instance, account } = await getWeb3(); 

        const transferTicketer = {...req.body};

        const transferTicketerInfo = await instance.BuyTicketByTransferTicketer(
            transferTicketer.concertId,
            transferTicketer.ticketId,
            transferTicketer.transferTicketerName,
            transferTicketer.transferTicketerPhoneNumber,
            transferTicketer.transferTicketerEmail,
            {gas: 1000000, from: account[0]}
        );
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
