import React from 'react';

import './tickets-list.scss'
import Ticket from '../ticket/ticket'

function TicketsList() {
    return (
        <ul className='main__tickets-list tickets-list'>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </ul>
    );
}

export default TicketsList;