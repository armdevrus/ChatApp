import {createSlice} from "@reduxjs/toolkit";

export const dataUserSlice = createSlice({
    name: 'dataUser',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})

export const {addUser} = dataUserSlice.actions

export default dataUserSlice.reducer