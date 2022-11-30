import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import CircularProgressIndicator from "../components/CircularProgressIndicator/CircularProgressIndicator"

const ProtectedRoute = ({ children }) => {
  const { loading, userInfo } = useSelector((state) => state.user)

  return (
    <>
      {loading ? (
        <CircularProgressIndicator />
      ) : !userInfo ? (
        <Navigate to="/login" replace />
      ) : (
        children
      )}
    </>
  )
}

export default ProtectedRoute
