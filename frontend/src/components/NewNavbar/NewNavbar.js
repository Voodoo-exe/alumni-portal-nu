import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./styles.css"
// import NIIT from "images/download.png"
export default function NewNavbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
            <Link to="/connect">Connect</Link>
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
