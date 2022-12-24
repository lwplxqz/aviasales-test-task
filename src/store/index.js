import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filter-slice'

export default configureStore({
    reducer: {
        transitFilters: filtersReducer
    }
})

