import styled from "styled-components"

export const Header = () => {
  return (
    <Wrapper>Header</Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #071427;
  color: #fff;
  z-index: 10;
`
