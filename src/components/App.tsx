import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages"
import "../assets/styles/reset.css"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
