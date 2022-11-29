import { configureStore } from "@reduxjs/toolkit"
import profileSlice from "../features/profile/profileSlice"
import userReducer from "../features/user/userSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    profile: profileSlice,
  },
})
