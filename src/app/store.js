import { configureStore } from '@reduxjs/toolkit'
import dataUserSlice from "../features/dataUser/dataUserSlice";

export default configureStore({
    reducer: {
        dataUser: dataUserSlice
    }
})