import {useState, useEffect, useRef} from 'react';

const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true })
    const isCurrent = useRef(true);
    
  useEffect(() => {
    return () => {
      isCurrent.current = false  
    }
  })
    
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
      
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({data: y, loading: false})
          }
        }, 2000)
      })
  }, [url])

  return state
}

export default useFetch;
