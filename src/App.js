import React, {useState, useRef, useLayoutEffect} from "react"
import Hello from "./Hello"
import useFetch from "./useFetch"
import useForm from "./useForm"
import { useMeasure } from "./useMeasure"

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" })
  const [showHello, setShowHello] = useState(true)
  
  const inputRef = useRef()
  const hello = useRef(() => console.log('***Hello***'))

  const [rect, inputRef2] = useMeasure([])

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);
  

  return (
    <>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello/>}
      <input ref={inputRef} name="email" value={values.email} onChange={handleChange} />
      <input
        ref={inputRef2}
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
