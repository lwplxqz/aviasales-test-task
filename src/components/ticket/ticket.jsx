

import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types'

import './ticket.scss'


function Card({ ticketsData: { price, carrier, segments } }) {

    const getPrice = (text, n) => `${text.slice(0, n - 3)} ${text.slice(n - 3)} Р`

    const ticketInfoToRender = []

    const formattedPrice = getPrice(price.toString(), price.toString().length)

    segments.forEach((segment) => {
        const { origin, destination, date, duration, stops } = segment

        const flightDateStart = format(new Date(date), 'p')
        const flightDateEnd = format(new Date(date).getTime() + duration * 60000, 'p')

        ticketInfoToRender.push(
            <div className="ticket__information" key={duration}>
                <div className="ticket__segment segment">
                    <p className="segment__header">{origin}-{destination}</p>
                    <p className="segment__body">{flightDateStart} - {flightDateEnd}</p>
                </div>
                <div className="ticket__segment segment">
                    <p className="segment__header">В ПУТИ</p>
                    <p className="segment__body">{Math.floor(duration / 60)}ч {Math.floor(duration % 60)}м</p>
                </div>
                <div className="ticket__segment segment">
                    <p className="segment__header">{stops.length ? `ПЕРЕСАДКИ: ${stops.length}` : 'БЕЗ ПЕРЕСАДОК'}</p>
                    <p className="segment__body">{stops.join(' ')}</p>
                </div>
            </div>
        )
    })
    return (<li className='tickets-list__ticket ticket'>
        <div className='ticket__header'>
            <span className='ticket__price'>{formattedPrice}</span>
            <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" className="ticket__logo" />
        </div>
        {ticketInfoToRender}

    </li>);
}

Card.defaultProps = {
    price: 10,
    ticketsData: {}
}

Card.propTypes = {
    price: PropTypes.number,
    ticketsData: PropTypes.instanceOf(Object),

}

export default Card;