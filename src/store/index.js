import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filter-slice'
import ticketsReducer from './tickets-slice'

export default configureStore({
    reducer: {
        transitFilters: filtersReducer,
        ticketsReducer,
    }
})

