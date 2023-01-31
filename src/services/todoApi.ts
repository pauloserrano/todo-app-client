import { api } from "../services"

export async function getTodos(token: string) {
  const response = await api.get("/todos", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  return response.data
}

export async function postTodo(token: string, body: object) {
  const response = await api.post("/todos", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  return response.data
}
