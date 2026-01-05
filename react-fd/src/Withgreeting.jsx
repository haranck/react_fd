import React from 'react'

export const Withgreeting = (WrappedComponent) => {
  return (props) =>{
    return (
      <div>
        <h1>Welcom Home</h1>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
