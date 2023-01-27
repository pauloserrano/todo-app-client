import styled from "styled-components"

type TodosProps = {
  data: {
    id: number,
    name: string,
    description: string
  }[]
}

export const Todos = ({ data }: TodosProps) => {
  return (
    <Wrapper>
      {data.map(({ id, name, description }) => (
        <li key={id}>
          <button />
          <div>
            <h4>{name}{name}{name}{name}{name}</h4>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;

  li{
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100px;
    margin: 0.5rem 0;
    padding: 0.75rem;
    border-radius: 25px;
    background-color: #465369;
    overflow: hidden;

    button{
      min-width: 35px;
      height: 35px;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: transparent;
      outline: none;
      border: 2px solid #fff;
      cursor: pointer;
    }

    div{
      width: 100%;

      h4{
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.2em;
        margin-bottom: 0.5em;
      }
  
      p{
        font-size: 0.75rem;
      }

      h4, p {
        max-width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`
