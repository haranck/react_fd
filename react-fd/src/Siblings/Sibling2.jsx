import React, { useContext } from 'react'
import { siblingContext } from '../App'

export const Sibling2 = () => {
  const { msg } = useContext(siblingContext)
  return (
    <div>
      <h2>message from sibling is : {msg}</h2>
    </div>
  )
}
