
import React, { useEffect, useState } from 'react';
import { Spin, Alert } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets, fetchId } from '../../store/tickets-slice';

import './tickets-list.scss'
import Ticket from '../ticket/ticket'


function TicketsList() {

    const { tickets: ticketsData, status, searchIdError } = useSelector(store => store.ticketsReducer)
    const { direct, one, two, three } = useSelector(store => store.transitFilters.transitFilters)
    const { sortQuery } = useSelector(store => store.sortReducer)

    const dispatch = useDispatch()
    const [ticketsToRenderCount, setTicketsToRenderCount] = useState(5)

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


    const filtersCount = {
        direct: direct ? 0 : undefined,
        one: one ? 1 : undefined,
        two: two ? 2 : undefined,
        three: three ? 3 : undefined
    }

    if (searchIdError) {
        return <Alert message="Что-то пошло не так, перезагрузите страницу" />
    }

    if (status === 'loading') {
        return <Spin />
    }


    const handleClick = () => {
        setTicketsToRenderCount(ticketsToRenderCount + 5)
    }


    const ticketsToRender = []



    if (status === 'resolved') {
        let ticketsRendered = 0
        let conunter = 0
        const ticketsToSort = ticketsData.slice()

        switch (sortQuery) {
            case 'cheapest':
                ticketsToSort.sort((prev, next) => prev.price - next.price)
                break;
            case 'fastest':
                ticketsToSort.sort((prev, next) => (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration))
                break;
            default:
                break;
        }
        if (!direct && !one && !two && !three) {
            return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" />
        }

        while (ticketsRendered !== ticketsToRenderCount) {
            const { price, carrier } = ticketsToSort[conunter]

            const stopsTo = ticketsToSort[conunter].segments[0].stops.length
            const stopsBack = ticketsToSort[conunter].segments[0].stops.length

            if (
                stopsTo === filtersCount.direct ||
                stopsTo === filtersCount.one ||
                stopsTo === filtersCount.two ||
                stopsTo === filtersCount.three ||
                stopsBack === filtersCount.direct ||
                stopsBack === filtersCount.one ||
                stopsBack === filtersCount.two ||
                stopsBack === filtersCount.three
            ) {

                ticketsToRender.push(<Ticket key={price + carrier + Math.random()} ticketsData={ticketsToSort[conunter]} />)
                ticketsRendered += 1
            }
            conunter += 1
        }



    }

    return (
        <>
            <ul className='main__tickets-list tickets-list'>
                {ticketsToRender}
            </ul>
            <button type="button" className="main__button-more" onClick={() => handleClick()}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
        </>
    );
}

export default TicketsList;