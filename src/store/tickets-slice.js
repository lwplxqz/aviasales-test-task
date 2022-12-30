/* eslint-disable no-use-before-define */

/* eslint-disable no-await-in-loop */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/aviasales-service";

export const fetchId = createAsyncThunk(
    'tickets/fetchId',
    async (_, { rejectWithValue }) => {
        const aviasalesAPI = new API()
        try {
            const { searchId } = await aviasalesAPI.getSearchId()
            return searchId
        } catch (error) {
            rejectWithValue(error)
        }

        const { searchId } = await aviasalesAPI.getSearchId()
        return searchId

    })
export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async (id, { dispatch, rejectWithValue }) => {
        const aviasalesAPI = new API()
        let stop = false

        while (!stop) {
            try {

                const response = await aviasalesAPI.getTickets(id)
                const ticketsData = await response.json()
                stop = ticketsData.stop


                dispatch(addTicket(ticketsData))
            } catch (error) {
                rejectWithValue(error)
            }
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
        error: null,
        searchIdError: false
    },
    reducers: {
        addTicket(state, action) {
            const { tickets } = action.payload
            return {
                ...state,
                tickets: [...state.tickets, ...tickets],
                status: 'resolved'
            }
        },
        setSearchId(state, action) {
            return {
                ...state,
                searchId: action.payload
            }
        },
        setError(state) {
            return {
                ...state,
                error: true
            }
        }
    },
    extraReducers: {
        [fetchTickets.fulfilled]: (state) => ({
            ...state, status: 'resolved'

        }),
        [fetchTickets.rejected]: (state) => ({
            ...state, error: true

        }),
        [fetchId.rejected]: (state) => ({
            ...state, searchIdError: true
        })
    }
})

export const { addTicket, setSearchId, setError, setSearchIdError } = ticketsSlice.actions

export default ticketsSlice.reducer



