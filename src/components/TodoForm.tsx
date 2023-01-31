import React from "react"
import styled from "styled-components"
import { useForm } from "../hooks"

type newTodo = {
  name: string,
  description?: string
}

export const TodoForm = () => {
  const { form, handleForm } = useForm<newTodo>({ name: "", description: "" })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleForm}
      />

      <label htmlFor="name">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={form.description}
        onChange={handleForm}
      />
      <button type="submit">Create a new Task</button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  input{
    font-size: 1rem;
    padding: 0.75em;
    margin-bottom: 1rem;
    border-radius: 5px;
    background-color: #bec7d6;

    &:focus{
      outline: none;
    }
  }

  button{
    margin-top: 1rem;
    padding: 1em 2em;
    background-color: #C6EAA7;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
  }

  input, button{
    border: none;
    outline: none;
  }
`
