import React, { useState, useMemo } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import About from "./pages/About"
import Index from "./pages/Index"
import { UserContext } from "./UserContext"

const App = () => {
  const [user, setUser] = useState(null)
  
  const value = useMemo(() => ({ user, setUser}), [user, setUser])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" exact element={<Index/>}></Route>
            <Route path="/about/" element={<About/>}></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default App
