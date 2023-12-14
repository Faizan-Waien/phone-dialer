import { createSlice } from '@reduxjs/toolkit'


const dialerSlice = createSlice({

    name: 'dialer',
    initialState: {
        dialer: [],
    },
    reducers: {

        dial: (state, action) => {
            state.dialer.push(action.payload);
        },
        backspace: (state) => {
            state.dialer.splice(-1, 1);
        },
        reset: (state) => {
            state.dialer = [];
        }
    }
})

export const { dial, backspace, reset } = dialerSlice.actions
export default dialerSlice.reducer