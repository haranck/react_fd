import React, { useContext } from 'react'
import { ToggleContext } from './App'
export const Button = () => {
  const {on,handleToggle} = useContext(ToggleContext)
  return (
    <div>
      <input type="checkbox" checked={on} />
      <button onClick={handleToggle}>toggle</button>
    </div>
  )
}
