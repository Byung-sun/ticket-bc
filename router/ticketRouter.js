import {
    registTicket,
    buyTicket,
    getTicket,
    updateTicket,
    deleteTicket,
    buyTicketByTransferTicketer,
} from './ctrl/ticket.ctrl';
import {
    registTicketSchema,
    buyTicketSchema,
    updateTicketSchema,
    transferTicketSchema,
} from './schema/ticketSchema';

const routes = [
    {
        method: 'POST',
        url: '/api/v1/regist_ticket',
        handler: registTicket,
        schema: registTicketSchema,
    },
    {
        method: 'POST',
        url: '/api/v1/buy_ticket',
        handler: buyTicket,
        schema: buyTicketSchema,
    },
    {
        method: 'GET',
        url: '/api/v1/get_ticket',
        handler: getTicket,
    },
    {
        method: 'PUT',
        url: '/api/v1/update_ticket',
        handler: updateTicket,
        schema: updateTicketSchema,
    },
    {
        method: 'DELETE',
        url: '/api/v1/delete_ticket',
        handler: deleteTicket,
    },
    {
        method: 'POST',
        url: '/api/v1/transfer_ticket',
        handler: buyTicketByTransferTicketer,
        schema: transferTicketSchema,
    },
];

export default routes;