import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 1 , name : "Learning Redux toolkit" , author : "Dave Gray"},
    {id : 2 , name : "Learning Node JS" , author : "Akshay Saini"} 
  ]

export const postsSlice = createSlice({
    name : "posts",
    initialState ,
})

export const selectAll = (state) => state.posts
export default postsSlice.reducer