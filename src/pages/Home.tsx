import styled from "styled-components"
import { Todos, Goals } from "../components"

const mock = [
  { id: 1, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
  { id: 2, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
  { id: 3, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
  { id: 4, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
]

export const Home = () => {
  return (
    <Wrapper>
      <h1>Everyday Your Task Plan</h1>
      <Goals />
      <h2>On Going Tasks</h2>
      <Todos data={mock} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  color: #FFF;
  height: calc(100vh - 140px);
  overflow-y: auto;

  h1{
    width: 75%;
    margin: 0 auto;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    line-height: 1.3em;
    letter-spacing: 0.025em;
  }

  h2{
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5em;
  }
`
