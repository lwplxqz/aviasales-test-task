import React from 'react';

import './main.scss'
import ButtonMore from '../button-more/button-more';
import Filters from '../filters/filters';
import TicketsList from '../tickets-list/tickets-list';

function Main() {
    return (
        <main className='app-main main'>
            <Filters />
            <TicketsList />
            <ButtonMore />
        </main>
    );
}

export default Main;