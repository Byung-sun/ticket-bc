import request from 'request';
import {
    getWeb3
} from '../web3/web3';
import Caver from 'caver-js';
const caver = new Caver('https://api.baobab.klaytn.net:8651');
let wallet = caver.klay.accounts.createWithAccountKey('0x6A12A3909D0737d7e4CDeDB3Cde300406700d672', '0xb1cfbca1ae8245638921bd5e1db5ec92cb99ddf6d334c9773d725b229706d8a8');
caver.klay.accounts.wallet.add(wallet);

const account = wallet.address


const registConcert = async (req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const concert = {...req.body};
        console.log(account)
        console.log(concert);

        const registConcertResult = await instance.methods.RegistConcert(
            concert.concertId,
            concert.name,
            concert.place,
            concert.date
        ).send(
            {gas: 300000, from: account.address});
        
        console.log(registConcertResult);

        return registConcertResult;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const getConcert = async(req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const concert = await instance.methods.GetConcert(req.query.concertId).call();

        console.log(concert);

        return concert;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const updateConcert = async(req, res) => {
    try {
        const {instance, account} = await getWeb3();

        const concert = {...req.body};

        const updatedConcert = await instance.methods.UpdateConcert(
            concert.concertId,
            concert.name,
            concert.place,
            concert.date,
        ).send(
            {gas: 300000, from: account.address});
        
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
