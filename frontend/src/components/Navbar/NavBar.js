import React from "react"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu className="menu">
          <Link to="/connect" activeStyle>
            Connect
          </Link>
          <Link to="/profile" activeStyle>
            Profile
          </Link>
          <Link to="/register" activeStyle>
            Register
          </Link>
          <Link to="/" activeStyle>
            Home
          </Link>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
