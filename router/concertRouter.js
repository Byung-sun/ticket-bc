import {
    registConcert,
    getConcert,
    updateConcert,
    deleteConcert,
} from './ctrl/concert.ctrl';

import {
    registConcertSchema,
    updateConcertSchema,
} from './schema/concertSchema';

const routes = [
    {
        method: 'POST',
        url: '/api/v1/regist_concert',
        handler: registConcert,
        schema: registConcertSchema,
    },
    {
        method: 'GET',
        url: '/api/v1/get_concert',
        handler: getConcert,
    },
    {
        method: 'PUT',
        url: '/api/v1/update_concert',
        handler: updateConcert,
        schema: updateConcertSchema,
    },
    {
        method: 'DELETE',
        url: '/api/v1/delete_concert',
        handler: deleteConcert,
    },
];

export default routes;