import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// userAction.js
export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async (userData, { rejectWithValue }) => {
    try {
      const data = {
        ...userData,
        pass_hash: userData.password,
        user_resume: null,
        user_image: null,
      }
      delete data.password
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
          credentials: "include",
        },
        withCredentials: true,
      }
      console.log("register userData: ", data)
      // make request to backend
      const response = await axios.post(
        "/api/v1/users/alumnus/register/",
        data,
        config
      )
      console.log(response)
      return response.data
    } catch (error) {
      console.log("Register error: ", error)
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  // action type string
  "user/login",
  // callback function
  async (userData, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      console.log("Login user data: ", userData)
      const config = {
        headers: {
          "Content-Type": "application/json",
          Credentials: "include",
          "Access-Control-Allow-Origin": true,
        },
      }
      // make request to backend
      const response = await axios.post(
        "/api/v1/users/alumnus/login",
        userData,
        config
      )
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

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      // make request to backend
      const response = await axios.post("/api/v1/users/alumnus/logout")
      return response.data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
