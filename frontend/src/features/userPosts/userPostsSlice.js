// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "./userPostsActions"

const initialState = {
  loading: false,
  error: null,
  success: false,
  userPosts: [],
}

const userPostsSlice = createSlice({
  name: "userPosts",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.userPosts = []
      state.error = null
      state.loading = false
      state.success = false
    },
  },
  extraReducers: {
    // register user
    [fetchPosts.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.userPosts = payload
    },
    [fetchPosts.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { clearState } = userPostsSlice.actions

export default userPostsSlice.reducer
