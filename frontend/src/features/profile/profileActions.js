import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getLoggedInUserDetails = createAsyncThunk(
  // action type string
  "profile/currentDetails",
  // callback function
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/users/alumnus")
      const data = response.data
      if (!data.success) throw data
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
