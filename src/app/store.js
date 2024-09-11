import { configureStore } from "@reduxjs/toolkit"
import postsReducers from "../feature/posts/postsSlice"
import usersReducers from "../feature/users/usersSlice"

export const store = configureStore({
 reducer : {
    posts : postsReducers,
    users : usersReducers
 }
})