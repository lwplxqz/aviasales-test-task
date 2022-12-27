/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/aviasales-service";

export const fetchId = createAsyncThunk(
    'tickets/fetchId',
    async () => {
        const aviasalesAPI = new API()
        const { searchId } = await aviasalesAPI.getSearchId()
        return searchId

    })

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async (id, { dispatch, getState }) => {
        const aviasalesAPI = new API()
        let stop = false
        while (!stop) {

            const response = await aviasalesAPI.getTickets(id)
            const ticketsData = await response.json()
            stop = ticketsData.stop


            dispatch(addTicket(ticketsData))
        }

    }
)

const ticketsSlice = createSlice({
    name: "tickets",
    initialState: {
        tickets: [],
        searchId: null,
        status: 'loading',
        serverStatus: null,
        error: null
    },
    reducers: {
        addTicket(state, action) {


            const { tickets } = action.payload
            state.tickets = [...state.tickets, ...tickets]
            state.status = 'resolved'
            console.log(state.tickets);


        },
        setSearchId(state, action) {
            state.searchId = action.payload
        }
    },
    extraReducers: {
        [fetchTickets.pending]: (state) => {

        },
        [fetchTickets.fulfilled]: (state, action) => {
            state.status = 'resolved'

        },

        [fetchTickets.rejected]: (state, action) => { },
    }
})

export const { addTicket, setSearchId } = ticketsSlice.actions

export default ticketsSlice.reducer