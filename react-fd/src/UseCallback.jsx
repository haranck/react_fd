import React, {  } from 'react'

const UseCallback = ({msg,handleMsg}) => {
  console.log("usecallback rendred")
  return (
    <div>
      <h1>use callback</h1>
      <input type="text" value={msg} onChange={handleMsg} />
    </div>
  )
}

export default React.memo(UseCallback)