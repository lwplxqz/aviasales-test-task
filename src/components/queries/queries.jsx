import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleFilterChange } from '../../store/filter-slice'

import './queries.scss'

function Queries() {

    const filtersFlags = useSelector(store => store.transitFilters.transitFilters)
    const dispatch = useDispatch()

    const filtersData = [
        {
            id: 'all',
            title: 'Все'
        }
        ,
        {

            id: "direct",
            title: 'Без пересадок'
        }
        ,
        {

            id: 'one',
            title: '1 пересадка'
        }
        ,
        {
            id: 'two',
            title: '2 пересадки'
        }
        ,
        {
            id: 'three',
            title: '3 пересадки'
        }

    ]


    const filters = filtersData.map(({ id, title }) => (
        <li className='queries-item item' key={id} >
            <label className='item-label' htmlFor={id} >
                <input
                    className='item-checkbox'
                    type="checkbox"
                    id={id}
                    checked={filtersFlags[id]}
                    onChange={() => dispatch(handleFilterChange(id))}
                />
                {title}
            </label>
        </li>
    )

    )

    return (

        <aside className='app-queries queries'>
            <h5 className='queries-title'>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <ul>
                {filters}

            </ul>
        </aside>
    );
}


export default Queries;