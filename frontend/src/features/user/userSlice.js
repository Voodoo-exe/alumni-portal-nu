// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit"
import { registerUser, loginUser, logoutUser } from "./userActions"

const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null
const initialState = {
  loading: false,
  userInfo, // for user object
  accessToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.userInfo = null
      state.accessToken = null
      state.error = null
      state.loading = false
      state.success = false
    },
  },
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem("accessToken", payload.accessToken)
      localStorage.setItem("userInfo", JSON.stringify(payload))
      state.loading = false
      state.success = true // registration successful
      state.userInfo = payload
      state.accessToken = payload.accessToken
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem("accessToken", payload.accessToken)
      localStorage.setItem("userInfo", JSON.stringify(payload))
      state.loading = false
      state.success = true // registration successful
      state.userInfo = payload
      state.accessToken = payload.accessToken
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [logoutUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      localStorage.removeItem("userInfo")
      localStorage.removeItem("profileInfo")
      localStorage.removeItem("accessToken")
      state.loading = false
      state.success = true // logout successful
      state.userInfo = null
      state.accessToken = null
      state.error = null
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { clearErrors } = userSlice.actions

export default userSlice.reducer
