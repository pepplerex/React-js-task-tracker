import React, { useContext } from 'react'

const Button = ({text,color}) => {

  return (
    <div style={{ 
        backgroundColor: color
     }} className="btn">{text}</div>
  )
}

export default Button