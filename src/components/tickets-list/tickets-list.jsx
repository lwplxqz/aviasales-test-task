import React from 'react';

import './tickets-list.scss'
import Ticket from '../ticket/ticket'
import API from '../../services/aviasales-service';

function TicketsList() {
    const service = new API

    const getTT = async ()  => {
        const gaysheesh = await service.getTickets()
        console.log(gaysheesh);
    }
    
    console.log(getTT())

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