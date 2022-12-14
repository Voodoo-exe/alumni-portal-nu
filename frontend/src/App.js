import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ConnectPage from "./components/ConnectPage/ConnectPage"
import Home from "./components/Home/Home.js"
import Profile from "./components/Profile/Profile"
import Register from "./components/Register/Register"
import NewNavbar from "./components/NewNavbar/NewNavbar"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"
import ProtectedRoute from "./utils/ProtectedRoute"
import UserPosts from "./components/Posts/UserPosts/UserPosts"

function App() {
  return (
    <div>
      <Router>
        <NewNavbar></NewNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            exact
            element={
              <ProtectedRoute>
                <UserPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/connect"
            exact
            element={
              <ProtectedRoute>
                <ConnectPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
