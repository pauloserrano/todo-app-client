import styled from "styled-components"
import { AiFillPlusCircle, AiFillHome } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { IoIosConstruct } from "react-icons/io"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <NavButton onClick={() => navigate("/")}>
        <AiFillHome />
      </NavButton>

      <NavButton onClick={() => navigate("/")}>
        <IoIosConstruct />
      </NavButton>

      <NavButton onClick={() => navigate("/new")}>
        <AiFillPlusCircle />
      </NavButton>

      <NavButton onClick={() => navigate("/")}>
        <IoIosConstruct />
      </NavButton>

      <NavButton onClick={() => navigate("/")}>
        <CgProfile />
      </NavButton>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0.5rem 2rem;
  border-radius: 25px 25px 0 0;
  background-color: #071427;
  color: #fff;
  z-index: 10;
`

const NavButton = styled.button`
  height: 80%;
  aspect-ratio: 1 / 1;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg{
    width: 100%;
    height: 100%;
    color: #C6EAA7;
  }
`
