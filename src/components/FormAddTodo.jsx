import { useState } from "react"
import useTodo from "../hooks/useTodo"

function FormAddTodo() {
  const { hdlAdd } = useTodo()
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()
    let newJob = { todo: input, completed: false, user: 1 }
    hdlAdd(newJob)
    alert('Added successfully') // Alert upon successful addition
    setInput('') // Reset input after adding
  }

  return (
    <form className="form-add-todo" onSubmit={hdlSubmit}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default FormAddTodo
