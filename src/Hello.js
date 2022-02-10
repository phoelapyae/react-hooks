import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import useFetch from './useFetch'
import { useMeasure } from './useMeasure'

const Hello = () => {
  const [count, setCount] = useState(0)
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  // const renders = useRef(0)

  // console.log("hello renders", renders.current++)
  
  const [rect, divRef] = useMeasure([data])

  return <div>
    <div style={{ display: "flex" }}>
      <div ref={divRef}>
        {!data ? 'loading...' : data}
      </div>
    </div>
    <pre>{ JSON.stringify(rect, null, 2) }</pre>
    <div>Count: {count}</div>
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
  </div>;
}

export default Hello;
