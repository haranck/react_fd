// import React, { useState } from 'react'

// export const App = () => {
//   const [count,setCount] = useState(0)

//   const increase = () => setCount((prev) => prev + 1)
//   const decrease = () => setCount((prev) => prev > 0 ? prev -1 :0)
//   const reset = () => setCount(0)
//   return (
//     <div>
//       <h1>counter</h1>
//       <h2>{count}</h2>
//       <button onClick={increase} disabled={count === 5}>+</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   )
// }

///////////////////////////////////////////////////////////////////////

//toggle context

// import React, { createContext, useState } from 'react'
// import { Button } from './Button'

// export const ToggleContext = createContext()

// export const App = () => {
//   const [on,setOn] = useState(false)
//   const handleToggle = () => setOn(!on)
//   return (
//     <ToggleContext.Provider value={{on,handleToggle}}>
//         <Button/>
//     </ToggleContext.Provider>
//   )
// }

////////////////////////////////////////////////////////////////////////

//sibling communication

// import React, { createContext, useState } from 'react'
// import { Sibling1 } from './Siblings/Sibling1'
// import { Sibling2 } from './Siblings/Sibling2'

// export const siblingContext = createContext()

// export const App = () => {
//   const [msg,setMsg] = useState('')

//   function handleMsg(msg){
//     setMsg(msg)
//   }

//   return (
//       <siblingContext.Provider value={{msg,handleMsg}}>
//         <Sibling1/>
//         <Sibling2/>
//       </siblingContext.Provider>
//   )
// }

//////////////////////////////////////////////////////////////////////////

//child to parent communication

// import React, { useState } from 'react'
// import { Child  } from './Child'

// export const App = () => {

//   const [msg,setMsg] = useState('')

//   const handleMsg = (message)=>{
//     setMsg(message)
//   }

//   return (
//     <div>
//       <h1>parent component</h1>
//       <Child sendDataToParent={handleMsg}/>
//       <p>Message from child : {msg}</p>
//     </div>
//   )
// }


////////////////////////////////////////////////////////////////////////////

//fetch question

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export const App = () => {
//   const [data, setData] = useState([]);
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     async function fetching() {
//       try {
//         let response =await axios.get("https://fakestoreapi.com/products");
//         setData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetching();
//   }, []);

//   const handleAdd = (value) => {
//     setPrice((prev)=> prev+value)
//   };

  // return (
  //   <div>
  //     <ul>
  //       {data.map((item, index) => (
  //         <li key={index}>
  //           {item.title}
  //           {item.price}
  //           <button onClick={()=>handleAdd(item.price)}>Add</button>
  //         </li>
  //       ))}
  //     </ul>
  //     <p>Total:{price}</p>
  //   </div>
  // );
// };


///////////////////////////////////////////////////////////////////////

//fetch with suspense

// import  React  from 'react'

// import { Suspense } from "react"

// const Product=React.lazy(()=> import ('./Child'))

// function App(){
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <Product/>
//     </Suspense>
//   )

// }

// export default App
  
///////////////////////////////////////////////////////////////////////////

//custom hook for toggle

// import React from 'react'
// import { UseToggle } from './UseToggle'

// export const App = () => {
//   const {toggle,handleToggle} = UseToggle()
//   return (
//     <div>
//       <input type="checkbox" name="" id="" checked={toggle} />
//       <button onClick={handleToggle}>toggle</button>
//     </div>
//   )
// }

///////////////////////////////////////////////////////////////////////////

//custom hook for fetch

import React from 'react'
import { UseFetch } from './UseFetch'

export const App = () => {
  const {data,error,loading} = UseFetch("https://jsonplaceholder.typicode.com/users")

  if(error)return <p>error:{error}</p>
  if(loading) return <p>Loading...</p>

  return (
    <ul>
      {data.map((item,index)=>(
        <li key={index}>{item.username}</li>
      ))}
    </ul>
  )
}
