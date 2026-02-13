import React from 'react'

const Button = (text , bg , textcolor) => {
  return (
     <button className={`bg-${bg} text-${textcolor} px-14 py-7 text-xl tracking-tighter rounded-full`}>
    {text}</button>
  )
}

export default Button