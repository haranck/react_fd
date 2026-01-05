
import React from 'react'

function About({handleShow}) {
  console.log('about page rendered')
  return (
    <div>
      <button onClick={handleShow}>⬅️Back</button>
      <h1>This is about page</h1>
    </div>
  )
}

export default About