import React, { useState, useEffect, useRef } from 'react'
import useFetch from './useFetch'

const Hello = () => {
  const [count, setCount] = useState(0)
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  // const renders = useRef(0)

  // console.log("hello renders", renders.current++)

  return <div>
    {loading ? 'loading...' : data}
    <div>Count: {count}</div>
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
  </div>;
}

export default Hello;
