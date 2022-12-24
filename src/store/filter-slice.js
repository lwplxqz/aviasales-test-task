/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const filterChanger = (filters, filterName) => {
    if (filterName === 'all' && filters.all === true) {
        return {
            all: false,
            direct: false,
            one: false,
            two: false,
            three: false
        }
    }
    if (filterName === 'all' && filters.all === false) {
        return {
            all: true,
            direct: true,
            one: true,
            two: true,
            three: true
        }
    }
    if (filterName === 'all' && filters.all === false) {
        return {
            all: true,
            direct: true,
            one: true,
            two: true,
            three: true
        }
    }

    return {
        ...filters,
        [filterName]: !filters[filterName]
    }
}


const filterSlice = createSlice({
    name: "transitFilters",
    initialState: {
        transitFilters: {
            all: false,
            direct: true,
            one: true,
            two: false,
            three: true
        },
    },
    reducers: {
        handleFilterChange(state, action) {

            const { transitFilters } = state
            const filterName = action.payload

            state.transitFilters = filterChanger(transitFilters, filterName)
            const filtersWithoutAll = {
                ...state.transitFilters,
                all: undefined
            }
            const checkedFilters = Object.entries({ ...filtersWithoutAll }).filter((item) => item[1]).length
            if (checkedFilters === 4) {
                state.transitFilters.all = true
            }
            if (checkedFilters !== 4) {
                state.transitFilters.all = false
            }
        },
    }
})

export const { handleFilterChange } = filterSlice.actions;
export default filterSlice.reducer