import React from 'react'

function Typography({ component: Component = 'div', text, className }) {
  // const Component = component ? component : 'div';
  // const Component = component || 'div';
  
  return (
    <Component className={className}>
      {text}
    </Component>
  )
}

export default Typography