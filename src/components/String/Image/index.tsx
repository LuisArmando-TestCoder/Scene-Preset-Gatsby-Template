import React from 'react'

import './styles.scss'

export default ({src, alt, className = ''}) => (
    <img src={src} alt={alt} className={`image ${className}`}/>
)