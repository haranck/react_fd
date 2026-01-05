// child to parent

// import React, { useState } from 'react'

// export const Child = ({sendDataToParent}) => {
//     const [msg,setMsg] =useState('')
//     function sendMsg(){
//         sendDataToParent(msg)
//     }
//   return (
//     <div>
//         <input type="text" placeholder='enter something ... ' onChange={(e) => setMsg(e.target.value)} />
//         <button onClick={sendMsg}>send</button>
//     </div>
//   )
// }

////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import axios from "axios";

function Child() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAdd(value) {
    setPrice((prev) => prev + value);
  }

  return (
    <div>
      <ul>
        {product.map((item, index) => (
          <li key={index}>
            {item.title}
            {item.price}
            <button onClick={() => handleAdd(item.price)}>Add</button>
          </li>
        ))}
      </ul>
      <p>Total:{price}</p>
    </div>
  );
}
export default Child;
