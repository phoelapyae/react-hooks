import React, {useEffect} from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('Render');
      
    return () => {
      console.log('Unmount!'); 
    }
  }, []);
    
  return <div>Hello</div>
}

export default Hello;
