/**
 * JSON Schema 관리
 * 
 * input, output 데이터를 사전 지정해서 
 * 스키마에 맞지 않게 들어온 input 값이 있으면
 * 400 Error return
 * 
 * 스키마에 맞는 데이터 값만 return 하게 된다
 * 
 * 반드시 지정 properties 만 받아야 하며,
 * 지정된 properties만 return 하게 되어서
 * 데이터 컨트롤이 용이해진다.
 */

const registTicketSchema = {
    body: {
        required: [
            'concertId',
            'ticketId',
            'date',
            'time',
            'seat',
            'discount',
            'price',
            'discountRate',
            'fee',
            'cancleDate',
            'cancleFee',
            'ticketerName',
            'ticketerPhoneNumber',
            'ticketerEmail',
        ],
        properties: {
            concertId: {type: 'string'},
            ticketId: {type: 'string'},
            date: {type: 'number'},
            time: {type: 'number'},
            seat: {type: 'string'},
            discount: {type: 'boolean'},
            price: {type: 'number'},
            discountRate: {type: 'number'},
            fee: {type: 'number'},
            cancleDate: {type: 'string'},
            cancleFee: {type: 'string'},
            ticketerName: {type: 'string'},
            ticketerPhoneNumber: {type: 'string'},
            ticketerEmail: {type: 'string'},
        },
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         properties: {
    //             name: {type: 'string'},
    //         }
    //     }
    // },
};

const buyTicketSchema = {
    body: {
        required: [
            'concertId',
            'ticketId',
            'date',
            'time',
            'seat',
            'discount',
            'price',
            'discountRate',
            'fee',
            'cancleDate',
            'cancleFee',
            'ticketerName',
            'ticketerPhoneNumber',
            'ticketerEmail',
        ],
        properties: {
            concertId: {type: 'string'},
            ticketId: {type: 'string'},
            date: {type: 'number'},
            time: {type: 'number'},
            seat: {type: 'string'},
            discount: {type: 'boolean'},
            price: {type: 'number'},
            discountRate: {type: 'number'},
            fee: {type: 'number'},
            cancleDate: {type: 'string'},
            cancleFee: {type: 'string'},
            ticketerName: {type: 'string'},
            ticketerPhoneNumber: {type: 'string'},
            ticketerEmail: {type: 'string'},
        },
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         properties: {
    //             name: {type: 'string'},
    //         }
    //     }
    // },
};

const updateTicketSchema = {
    body: {
        required: [
            'concertId',
            'ticketId',
            'date',
            'time',
            'seat',
            'discount',
            'price',
            'discountRate',
            'fee',
            'cancleDate',
            'cancleFee',
        ],
        properties: {
            concertId: {type: 'string'},
            ticketId: {type: 'string'},
            date: {type: 'number'},
            time: {type: 'number'},
            seat: {type: 'string'},
            discount: {type: 'boolean'},
            price: {type: 'number'},
            discountRate: {type: 'number'},
            fee: {type: 'number'},
            cancleDate: {type: 'string'},
            cancleFee: {type: 'string'},
        },
    },
};

const transferTicketSchema = {
    body: {
        required: [
            'concertId',
            'ticketId',
            'transferTicketerName',
            'transferTicketerPhoneNumber',
            'transferTicketerEmail',
        ],
        properties: {
            concertId: {type: 'string'},
            ticketId: {type: 'string'},
            transferTicketerName: {type: 'string'},
            transferTicketerPhoneNumber: {type: 'string'},
            transferTicketerEmail: {type: 'string'},
        },
    },
};

export { 
    registTicketSchema,
    buyTicketSchema,
    updateTicketSchema,
    transferTicketSchema,
};