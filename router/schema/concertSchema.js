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

const registConcertSchema = {
    body: {
        required: [
            'concertId',
            'name',
            'place',
            'date',
        ],
        properties: {
            concertId: {type: 'string'},
            name: {type: 'string'},
            place: {type: 'string'},
            date: {type: 'number'},
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

const updateConcertSchema = {
    body: {
        required: [
            'concertId',
            'name',
            'place',
            'date',
        ],
        properties: {
            concertId: {type: 'string'},
            name: {type: 'string'},
            place: {type: 'string'},
            date: {type: 'number'},
        },
    },
};

export { 
    registConcertSchema,
    updateConcertSchema,
};