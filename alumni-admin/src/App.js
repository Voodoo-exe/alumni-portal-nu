import logo from "./logo.svg"
import "./App.css"
import { Home, Docs, Events, Jobs, Mentions, News } from "./containers"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
