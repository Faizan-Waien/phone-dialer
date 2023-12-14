import { configureStore } from '@reduxjs/toolkit'
import dialerSlice  from './Slice/dialerSlice'
import recordSlice  from './Slice/recordSlice'

const store = configureStore({

    reducer: {
        dialer: dialerSlice,
        record: recordSlice,
    }
})

export default store 