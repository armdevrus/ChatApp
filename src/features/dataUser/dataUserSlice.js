import {createSlice} from "@reduxjs/toolkit";

export const dataUserSlice = createSlice({
    name: 'dataUser',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        changePassword: (state, action) =>{
            state.users = state.users.map(elem => elem.userEmail === action.payload.userEmail ? {
                ...elem,
                userPassword: action.payload.userPassword
            } : elem)
        }
    }
})

export const {addUser, changePassword} = dataUserSlice.actions

export default dataUserSlice.reducer