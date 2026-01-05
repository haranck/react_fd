import React, { useState } from 'react'

export const Form = ({handleForm}) => {
  const [formData,setFormData] = useState({name:'',email:''})

  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }

  function submitForm(event){
    event.preventDefault()
    console.log(formData)
    handleForm(formData)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" name='name'  value={formData.name} onChange={handleChange} placeholder='enter name'/>
        <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='enter email' />
        <button type='submit'>enter</button>
      </form>
    </div>
  )
}

