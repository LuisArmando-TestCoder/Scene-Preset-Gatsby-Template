import React from 'react'
import {
    Icons as IconsState
} from '../../../state'
import {
    useRecoilState
} from '../../../utils'

interface Properties {
    name: 'heart'
    className?: string
}

export default ({
    name,
    className = ''
}: Properties) => {
    const [icon] = useRecoilState(IconsState, {
        transform: icons => icons[name]
    })

    return (
        <div
            className={`icon ${className}`}
            dangerouslySetInnerHTML={{__html: icon}}
        />
    )
}