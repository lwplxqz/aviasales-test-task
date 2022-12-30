import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sortSlice',
    initialState: {
        sortQuery: 'cheapest'
    },
    reducers: {
        setSortQuery(state, action) {
            return { sortQuery: action.payload }
        }
    }
})

export const { setSortQuery } = sortSlice.actions

export default sortSlice.reducer