import React, { useState } from 'react'
import { useCountRenders } from './useCountRenders';

const Hello = React.memo(({ increment }) => {
  useCountRenders()
  return (
    <>
      <button onClick={() => increment(5)}>Increment</button>
    </>
  )
})

export default Hello;
