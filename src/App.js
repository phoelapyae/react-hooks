import React, { useState, useCallback, useMemo } from "react"
import { useFetch } from './useFetch'

// function computeLongestWord(arr) {
//   if (!arr) {
//     return []
//   }

//   console.log("Computing longest word.")

//   let longestWorld = ""

//   JSON.parse(arr).forEach(sentence => {
//     sentence.split(" ").forEach(word => {
//       if (word.length > longestWorld.length) {
//         longestWorld = word
//       }
//     })
//   })

//   return longestWorld
// }

const App = () => {
  const [count, setCount] = useState(0)
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  )

  const computeLongestWord = useCallback(arr => {
    if (!arr) {
        return []
      }

      console.log("Computing longest word.")

      let longestWorld = ""

      JSON.parse(arr).forEach(sentence => {
        sentence.split(" ").forEach(word => {
          if (word.length > longestWorld.length) {
            longestWorld = word
          }
        })
      })

      return longestWorld
  }, [])

  const longestWorld = useMemo(() => computeLongestWord(data), [data])

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Implement</button>
      <div>{longestWorld}</div>
    </>
  )
}

export default App;
