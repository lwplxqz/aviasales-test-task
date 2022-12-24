import React from 'react';

import './ticket.scss'
import logo from './logo.png'

function Card() {
    return (<li className='tickets-list__ticket ticket'>
        <div className='ticket__header'>
            <span className='ticket__price'>13 400Р</span>
            <img src={logo} alt="logo" className="ticket__logo" />
        </div>
        <div className="ticket__information">
            <div className="ticket__segment segment">
                <p className="segment__header">ALA-MSK</p>
                <p className="segment__body">8:00-19:00</p>
            </div>
            <div className="ticket__segment segment">
                <p className="segment__header">В ПУТИ</p>
                <p className="segment__body">6ч 43м</p>
            </div>
            <div className="ticket__segment segment">
                <p className="segment__header">2 ПЕРЕСАДКИ</p>
                <p className="segment__body">BNG, SOS</p>
            </div>
        </div>
        <div className="ticket__information">
            <div className="ticket__segment segment">
                <p className="segment__header">ALA-MSK</p>
                <p className="segment__body">8:00-19:00</p>
            </div>
            <div className="ticket__segment segment">
                <p className="segment__header">В ПУТИ</p>
                <p className="segment__body">6ч 43м</p>
            </div>
            <div className="ticket__segment segment">
                <p className="segment__header">2 ПЕРЕСАДКИ</p>
                <p className="segment__body">BNG, SOS</p>
            </div>
        </div>
    </li>);
}



export default Card;