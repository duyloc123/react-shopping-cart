import React from 'react'

function Button({ type = 'button', text = '', icon = null, bgColor = '#eee', onClick, disabled }) {
  return (
    <button 
      className="button" 
      type={type}
      style={{
        backgroundColor: bgColor
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon && icon}
    </button>
  )
}

export default Button