import React, {useState, useRef} from "react"
import Hello from "./Hello"
import useFetch from "./useFetch"
import useForm from "./useForm"

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" })
  const [showHello, setShowHello] = useState(true)
  
  const inputRef = useRef()
  const hello = useRef(() => console.log('***Hello***'))

  return (
    <>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello/>}
      <input ref={inputRef} name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={() => {
        inputRef.current.focus()
        hello.current()
      }}>Focus</button>
    </>
  );
}

export default App;
