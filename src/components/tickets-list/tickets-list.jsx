/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets, fetchId } from '../../store/tickets-slice';

import './tickets-list.scss'
import Ticket from '../ticket/ticket'


function TicketsList() {

    const { tickets: ticketsData, status } = useSelector(store => store.ticketsReducer)

    const dispatch = useDispatch()


    useEffect(() => {
        const asyncFn = async () => {
            const response = await dispatch(fetchId())
            const searchId = await response.payload

            dispatch(
                fetchTickets(searchId)
            )
        }
        asyncFn()
    }, [dispatch])



    if (status === 'loading') {
        return <h1>Loading...</h1>
    }

    const ticketsToRenderCount = 5

    const ticketsToRender = []

    if (status === 'resolved') {


        for (let i = 0; i < ticketsToRenderCount; i += 1) {
            const { price, carrier } = ticketsData[i]
            ticketsToRender.push(<Ticket key={price + carrier} ticketsData={ticketsData[i]} />)
        }

    }

    return (
        <>
            <ul className='main__tickets-list tickets-list'>
                {ticketsToRender}
            </ul>
            <button type="button" className="main__button-more">ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
        </>
    );
}

export default TicketsList;