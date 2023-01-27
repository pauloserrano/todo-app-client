import { useState } from "react"

export default function useForm<T>(initial: T = {} as T) {
  const [form, setForm] = useState<T>(initial)

  const handleForm = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return { form, setForm, handleForm }
}
