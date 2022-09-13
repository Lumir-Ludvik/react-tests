import { configureStore } from '@reduxjs/toolkit'
import simpleFormSlice from "./simple-form/simpleFormSlice";

export default configureStore({
    reducer: {
        simpleForm: simpleFormSlice
    },
})
