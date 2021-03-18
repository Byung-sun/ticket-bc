// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract TicketContract {

    // 공연 구조체
    // name  : 공연 이름
    // place : 공연 장소
    // date  : 공연 기간
    struct Concert {
        string name;
        string place;
        uint32 date;
    }

    // 티켓 구조체
    struct Ticket {
        uint32 date;
        uint32 time;
        string seat;
        bool discount;
        uint32 price;
        uint8 discountRate;
        uint8 fee;
        string cancleDate;
        string cancleFee;
    }

    // 최초 예매자 구조체
    struct FirstTicketer {
        string name;
        string phoneNumber;
        string email;
    }

    // 소유권 이전 정보 구조체
    struct TransferTicketer {
        string name;
        string phoneNumber;
        string email;
    }

    mapping(string => Concert) concerts;
    // mapping(uint256 => Ticket[]) tickets;
    // mapping(uint256 => FirstTicketer[]) firstTicketers;
    mapping(string => mapping(string => Ticket)) tickets;
    mapping(string => mapping(string => FirstTicketer)) firstTicketers;
    mapping(string => mapping(string => TransferTicketer)) transferTicketers;

    // event _registConcert(string name, string place, string date);
    // event _buyTicket(
    //     uint256 _conId,
    //     string _name,
    //     string _birth,
    //     string _phoneNumber,
    //     string email
    // );

    // functions
    function RegistConcert(
        string memory _conId,
        string memory _name,
        string memory _place,
        uint32 _date
    ) public returns (bool) {
        require(concerts[_conId].date == 0 , "Exist Concert");
        Concert memory _concert = Concert({
            name: _name,
            place: _place,
            date: _date
        });

        concerts[_conId] = _concert;

        // _registConcert(_name, _place, _date);

        return true;
    }

    function UpdateConcert(
        string memory _conId,
        string memory _name,
        string memory _place,
        uint32 _date
    ) public returns(bool) {
        Concert memory _concert = Concert({
            name: _name,
            place: _place,
            date: _date
        });

        concerts[_conId] = _concert;

        return true;
    }

    function BuyTicket(
        string memory _conId,
        string memory _ticketId,
        uint32 _date,
        uint32 _time,
        string memory _seat,
        bool _discount,
        uint32 _price,
        uint8 _discountRate,
        uint8 _fee,
        string memory _cancleDate,
        string memory _cancleFee
    ) public returns (bool) {
        // require(concerts[_conId].name.length != 0, "there is no concert");
        require(concerts[_conId].date != 0, "Not Exist concert");        
        require(tickets[_conId][_ticketId].date == 0, "Exist ticket");
        Ticket memory _tk = Ticket({
            date: _date,
            time: _time,
            seat: _seat,
            discount: _discount,
            price: _price,
            discountRate: _discountRate,
            fee: _fee,
            cancleDate: _cancleDate,
            cancleFee: _cancleFee
        });

        tickets[_conId][_ticketId] = _tk;

        return true;
    }

    function UpdateTicket(
        string memory _conId,
        string memory _ticketId,
        uint32 _date,
        uint32 _time,
        string memory _seat,
        bool _discount,
        uint32 _price,
        uint8 _discountRate,
        uint8 _fee,
        string memory _cancleDate,
        string memory _cancleFee
    ) public returns (bool) {
        
        Ticket memory _tk = Ticket({
            date: _date,
            time: _time,
            seat: _seat,
            discount: _discount,
            price: _price,
            discountRate: _discountRate,
            fee: _fee,
            cancleDate: _cancleDate,
            cancleFee: _cancleFee
        });

        tickets[_conId][_ticketId] = _tk;

        return true;
    }

    function BuyTicketByFirstTicketer(
        string memory _conId,
        string memory _ticketId, 
        string memory _name,
        string memory _phoneNumber,
        string memory _email
    ) public returns(bool) {
        FirstTicketer memory _ft = FirstTicketer({
            name: _name,
            phoneNumber: _phoneNumber,
            email: _email
        });

        firstTicketers[_conId][_ticketId] = _ft;

        return true;
    }

    function BuyTicketByTransferTicketer(
        string memory _conId,
        string memory _ticketId,
        string memory _name,
        string memory _phoneNumber,
        string memory _email
    ) public returns(bool) {
        TransferTicketer memory _tt = TransferTicketer({
            name: _name,
            phoneNumber: _phoneNumber,
            email: _email
        });

        transferTicketers[_conId][_ticketId] = _tt;

        return true;
    }


    /*
        Getters
     */
    function GetTicketByConcertId(string memory _conId, string memory _ticketId) public view returns(Ticket memory) {
        return tickets[_conId][_ticketId];
    }

    // function GetConcertLength() public view returns(uint256) {
    //     return concerts.length;
    // }

    function GetConcert(string memory _conId) public view returns(Concert memory) {
        return concerts[_conId];
    }

    function GetFirstTicketer(string memory _conId, string memory _ticketId) public view returns(FirstTicketer memory) {
        return firstTicketers[_conId][_ticketId];
    }

    function GetTransferTicketer(string memory _conId, string memory _ticketId) public view returns(TransferTicketer memory) {
        return transferTicketers[_conId][_ticketId];
    }

}