import React from 'react'

// function ImageSimple({ src, alt, title }) {
//   return (
//     <img alt={alt} title={title} src={src} />
//   )
// }

function ImageSimple({ ...restProps }) {
  return (
    <img {...restProps} />
  )
}

export default ImageSimple