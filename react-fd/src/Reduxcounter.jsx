import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,reset} from './slice/slice'

export const Reduxcounter = () => {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}
