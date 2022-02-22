import React, {useContext} from 'react'
import { UserContext } from '../UserContext'

function About() {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h2>About Page</h2>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default About