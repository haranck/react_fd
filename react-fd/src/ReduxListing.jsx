import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem,removeItem } from './slice/Listingslice'

export const ReduxListing = () => {
  const [text,setText] = useState('')
  const list = useSelector((state)=> state.list.list)
  const dispatch = useDispatch()

  const handleAdd = () =>{
    if(text.trim()==='')return 
    dispatch(addItem(text))
    setText('')
  }

  return (
    <div>
      <h1>Redux list</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleAdd}>addItem</button>

      {list.length&&
        <ul>
          {list.map((item,index)=>(
            <li key={index}>{item}
            <button onClick={()=>dispatch(removeItem(index))}> X </button>
            </li>
          ))}
        </ul>
      }

    </div>
  )
}
