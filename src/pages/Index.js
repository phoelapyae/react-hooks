import React, {useContext} from 'react'
import { UserContext } from '../UserContext'
import { login } from '../utils/login'

function Index() {
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      <h2>Home Page</h2>
      <pre>
        {JSON.stringify(user,null,2)}
      </pre>
      {user ? (
        <button onClick={() => {
          setUser(null)
        }}>Logout</button>
      ): (
        <button onClick={async () => {
        const user = await login()
        setUser(user)
        }}>login</button>
      )}
      
    </div>
  )
}

export default Index