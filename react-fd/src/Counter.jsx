import React, { useContext } from 'react'
import { CounterContext } from './App'

export const Counter = () => {
    const {count,increase,reset,decrease} = useContext(CounterContext)
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increase} >increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrease} disabled={count===0}>decrement</button>
    </div>
  )
}


