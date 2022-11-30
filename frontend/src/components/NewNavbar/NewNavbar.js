import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./styles.css"
// import NIIT from "images/download.png"
export default function NewNavbar() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )

  const {
    loading: profileLoading,
    profileInfo,
    error: profileError,
    success: profileSuccess,
  } = useSelector((state) => state.profile)

  return (
    <nav className="nav">
      <img src="images/download.png" className="logo" />
      <Link to="/" className="site-title">
        NIIT UNIVERSITY
      </Link>
      <ul>
        {userInfo && (
          <li>
            <Link reloadDocument to="/home">
              Home
            </Link>
          </li>
        )}
        {userInfo && (
          <li>
            <Link reloadDocument to="/connect" name="connect_link">
              Connect
            </Link>
          </li>
        )}
        {profileInfo && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {!userInfo && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!userInfo && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {userInfo && (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
