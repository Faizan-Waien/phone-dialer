import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const recordSlice = createSlice({

    name: 'record',
    initialState: {
        record: [],
    },
    reducers: {
        addCall: (state, action) => {
            state.record.push({ id: uuidv4(), ...action.payload })
        },
        removeRecord(state, action) {
            const removeItem = state.record.filter((item) => item.id !== action.payload)
            state.record = removeItem
        }
    }
})

export const { addCall, removeRecord } = recordSlice.actions
export default recordSlice.reducer