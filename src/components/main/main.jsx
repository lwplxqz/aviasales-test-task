import React from 'react';

import './main.scss'

import Filters from '../filters/filters';
import TicketsList from '../tickets-list/tickets-list';

function Main() {
    return (
        <main className='app-main main'>
            <Filters />
            <TicketsList />
        </main>
    );
}

export default Main;