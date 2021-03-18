import request from 'request';
import {
    getWeb3
} from '../web3/web3';

const registConcert = async (req, res) => {
    try {
        const { instance, account } = await getWeb3();
        const concert = {...req.body};

        console.log(concert);

        const registConcertResult = await instance.RegistConcert(
            concert.concertId,
            concert.name,
            concert.place,
            concert.date,
            {gas: 1000000, from: account[0]}
        );
        
        console.log(registConcertResult);

        return registConcertResult;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const getConcert = async(req, res) => {
    try {
        const { instance, account } = await getWeb3();

        const concert = await instance.GetConcert.call(req.query.concertId);

        console.log(concert);

        return concert;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const updateConcert = async(req, res) => {
    try {
        const { instance, account } = await getWeb3();

        const concert = {...req.body};

        const updatedConcert = await instance.UpdateConcert(
            concert.concertId,
            concert.name,
            concert.place,
            concert.date,
            {gas: 1000000, from: account[0]}
        );
        
        console.log(updatedConcert);

        return updatedConcert;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const deleteConcert = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        return e;
    }
}

export {
    registConcert,
    getConcert,
    updateConcert,
    deleteConcert,
};
