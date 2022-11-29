import React, { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../features/user/userActions"

const ProtectedRoute = ({ children }) => {
  const { loading, userInfo, accessToken, error } = useSelector(
    (state) => state.user
  )

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : !userInfo ? (
        <Navigate to="/login" />
      ) : (
        children
      )}
    </>
  )
}

export default ProtectedRoute
