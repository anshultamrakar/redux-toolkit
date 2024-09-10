import { configureStore } from "@reduxjs/toolkit"
import postsReducers from "../feature/posts/postsSlice"

export const store = configureStore({
 reducer : {
    posts : postsReducers
 }
})