import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// userAction.js
export const fetchPosts = createAsyncThunk(
  // action type string
  "userPosts/fetchPosts",
  // callback function
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/posts/general_posts/")
      return response.data
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
