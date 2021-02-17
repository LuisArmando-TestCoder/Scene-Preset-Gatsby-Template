
import React from 'react'
import './styles.scss'

const NORMAL = 'normal'
const TITLE = 'title'
const SUBTITLE = 'subtitle'

const Copy = {
    [TITLE]: ({children, className}) => (
        <h1 className={className}>{children}</h1>
    ),
    [SUBTITLE]: ({children, className}) => (
        <h2 className={className}>{children}</h2>
    ),
    [NORMAL]: ({children, className}) => (
        <p className={className}>{children}</p>
    ),
}

type CopyType = typeof NORMAL | typeof TITLE | typeof SUBTITLE

interface Properties {
    children
    type: CopyType
    className?: string
}

export default ({
    children,
    type,
    className = ''
}: Properties) => {
    const Text = Copy[type]

    return (
        <div className={`copy ${className}`}>
            <Text className={`copy__${type}`}>
                {children}
            </Text>
        </div>
    )
}