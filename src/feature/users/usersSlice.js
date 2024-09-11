import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id : "0" , name : "Anshul Tamrakar"},
    {id : "1"  , name : "Ankit yadav"},
    {id : "2" , name : "Rohan Chourasia"}
]


export const usersSlice = createSlice({
    name : "users",
    initialState,
    reducers : {}
})

export const selectAllUser = (state) => state.users
export default usersSlice.reducer