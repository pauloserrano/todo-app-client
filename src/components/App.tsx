import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, TodoCreate } from "../pages"
import "../assets/styles/reset.css"

export default function App() {
  return (
    <GlobalStyle>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<TodoCreate />} />
        </Routes>
      </Router>
    </GlobalStyle>
  )
}

const GlobalStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background: #182843;
  font-family: sans-serif;
`
