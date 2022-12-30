import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filter-slice'
import ticketsReducer from './tickets-slice'
import sortReducer from './sort-slice'

export default configureStore({
    reducer: {
        transitFilters: filtersReducer,
        ticketsReducer,
        sortReducer
    }
})

