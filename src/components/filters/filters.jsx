import React from 'react';

import './filters.scss'

function Filters() {
    return (
        <ul className='main-filters'>
            <li className='main-filter main-filter__active'>САМЫЙ ДЕШЕВЫЙ</li>
            <li className='main-filter'>САМЫЙ БЫСТРЫЙ</li>
            <li className='main-filter'>ОПТИМАЛЬНЫЙ</li>
        </ul>
    );
}

export default Filters;