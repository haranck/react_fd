import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUsers } from './slice/Userslice'
import { removeItem } from './slice/Userslice'
export const Userfetch = () => {
  const {users,loading,error} =  useSelector((state)=>state.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(users.length===0){
      dispatch(FetchUsers())
    }
  },[])

  if(loading)return <p>Loading...</p>
  if(error)return <p>Error:{error}</p>
  console.log(users)
  return (
    <div>
      {users.length&&
        <ol>
          {users.map((item,index)=>(
            <li key={index}>{item.username}
            <button onClick={()=>dispatch(removeItem(index))}>X</button>
            </li>
          ))}
        </ol>
      }
    </div>
  )
}
