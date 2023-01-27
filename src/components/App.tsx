import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages"
import "../assets/styles/reset.css"
import styled from "styled-components"
import { Header, NavBar } from "../components"

export default function App() {
  return (
    <GlobalStyle>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <NavBar />
      </Router>
    </GlobalStyle>
  )
}

const GlobalStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 100vh;
  position: relative;
  background: #182843;
  font-family: sans-serif;
`
