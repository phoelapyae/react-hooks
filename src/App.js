import React, { useReducer, useState } from "react"

function reducer(state,action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        totalCount: state.totalCount + 1
      }
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t),
        totalCount: state.totalCount
      }
    default: 
      return state
  }
}

const App = () => {
  const [{ todos, totalCount }, dispatch] = useReducer(reducer, { todos: [], totalCount: 0 })
  const [text, setText]   = useState('')
  
  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({ type: "add-todo", text })
        setText("")
      }}>
        <input value={text} onChange={e => setText(e.target.value)}/>
      </form>
      <p>Number of counts: {totalCount}</p>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{
            textDecoration: t.completed ? "line-through" : ""
          }}
        >
          {t.text}
        </div>
      ))}
    </>
  )
}

export default App
