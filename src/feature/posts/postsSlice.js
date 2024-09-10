import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 1 , title : "Learning Redux toolkit" , content : "Dave Gray"},
    {id : 2 , title : "Learning Node JS" , content : "Akshay Saini"} 
  ]

export const postsSlice = createSlice({
    name : "posts",
    initialState ,
    reducers : {
      postAdded : (state , action) => {
        state.push(action.payload)
      }
    }
})

export const selectAll = (state) => state.posts
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer