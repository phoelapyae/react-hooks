import React, {useState, useCallback} from "react"
import Hello from "./Hello"
import { Square } from "./Square";

const App = () => {
  const [count, setCount] = useState(0);

  const favNumbers = [5,10,15,20]

  const increment = useCallback((n) => {
    setCount(count => count + n)
  },[setCount])

  return (
    <>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favNumbers.map(n => {
        return <Square increment={increment} n={n} key={n}/>
      })}
    </>
  )
}

export default App;
