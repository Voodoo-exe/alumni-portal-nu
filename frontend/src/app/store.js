import { configureStore } from "@reduxjs/toolkit"
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query"
import profileSlice from "../features/profile/profileSlice"
import userReducer from "../features/user/userSlice"
import userPostsSlice from "../features/userPosts/userPostsSlice"
import { connectionsSlice } from "../api/connectionsSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    profile: profileSlice,
    userPosts: userPostsSlice,
    [connectionsSlice.reducerPath]: connectionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(connectionsSlice.middleware),
})
