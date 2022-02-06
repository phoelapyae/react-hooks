import React, {useState, useEffect} from "react";
import Hello from "./Hello";
import useFetch from "./useFetch";
import useForm from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0)

  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   }
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   }
  // },[])

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  },[count])

  return (
    <>
      {loading ? 'loading...' : data}
      <button onClick={() => setCount(count => count + 1)}>Click</button>
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello/>} */}
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
