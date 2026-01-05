
import React, { useContext, useState } from 'react'
import { siblingContext } from '../App'

export const Sibling1 = () => {

  const [msg,setMsg] = useState('')
  const {handleMsg} = useContext(siblingContext)

  const sendMessage = () => {
    handleMsg(msg)
  }
  
  return (
    <div>
      <input type="text" placeholder='tyep somthing ' onChange={(e)=>setMsg(e.target.value)} />
      <button onClick={sendMessage}>send</button>
    </div>
  )
}
