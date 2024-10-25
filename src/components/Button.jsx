import React from 'react'

function Button({ type = "button" ,text, icon = null, bgColor = "#f6c90e", onClick }) {
  return (
    <button 
    className='Button'
     onClick = {onClick} 
     type = {type}
     style={{backgroundColor: bgColor}}>
        {text || icon}
    </button>
  )
}

export default Button