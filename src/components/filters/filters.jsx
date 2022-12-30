
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSortQuery } from '../../store/sort-slice';

import './filters.scss'

function Filters() {

    const { sortQuery } = useSelector(store => store.sortReducer)
    const dispatch = useDispatch()


    const filtersData = [
        {
            label: 'САМЫЙ ДЕШЕВЫЙ',
            id: 'cheapest',
            checked: sortQuery === 'cheapest'
        },
        {
            label: 'САМЫЙ БЫСТРЫЙ',
            id: 'fastest',
            checked: sortQuery === 'fastest'
        },
        {
            label: 'ОПТИМАЛЬНЫЙ',
            id: 'optimal',
            checked: sortQuery === 'optimal'
        }
    ]

    const filters = filtersData.map((filter) => (<li key={filter.id} className={`main-filter ${filter.checked ? 'main-filter__active' : ''}`}>
        <label htmlFor={filter.id} className='main-label'>
            <input type="radio" name="filter" id={filter.id} className="main-input" checked={filter.checked} onChange={() => dispatch(setSortQuery(filter.id))} />
            {filter.label}
        </label>
    </li>))


    return (
        <ul className='main-filters'>
            {filters}

        </ul>


    );
}

export default Filters;