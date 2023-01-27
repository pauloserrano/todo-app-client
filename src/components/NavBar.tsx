import styled from "styled-components"

export const NavBar = () => {
  return (
    <Wrapper>NavBar</Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 25px 25px 0 0;
  background-color: #071427;
  color: #fff;
  z-index: 10;
`
