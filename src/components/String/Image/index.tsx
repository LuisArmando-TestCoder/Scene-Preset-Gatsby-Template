import React from 'react'

export default ({src, alt, className = ''}) => (
    <img src={src} alt={alt} className={`image ${className}`}/>
)
