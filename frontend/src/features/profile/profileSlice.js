// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit"
import { getLoggedInUserDetails } from "./profileActions"

const profileInfo = localStorage.getItem("profileInfo")
  ? JSON.parse(localStorage.getItem("profileInfo"))
  : null

const initialState = {
  loading: false,
  profileInfo: profileInfo,
  error: null,
  success: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.profileInfo = null
      state.error = null
      state.loading = false
      state.success = false
    },
  },
  extraReducers: {
    [getLoggedInUserDetails.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getLoggedInUserDetails.fulfilled]: (state, { payload }) => {
      console.log("Pay")
      localStorage.setItem("profileInfo", JSON.stringify(payload.data[0]))
      console.log("Profile payload : ", payload)
      state.loading = false
      state.success = true // registration successful
      state.profileInfo = payload.data[0]
    },
    [getLoggedInUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { clearState } = profileSlice.actions

export default profileSlice.reducer
