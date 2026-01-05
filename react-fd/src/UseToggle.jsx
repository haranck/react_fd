
import React, { useState } from 'react'

export const UseToggle = () => {
  const [toggle,setToggle] = useState(false)
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return {toggle,handleToggle}
}
