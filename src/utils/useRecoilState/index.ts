import { useEffect, useState }  from 'react'
import { promiseGetRecoil } from 'recoil-outside'

export default (recoilState, {
    transform = null,
    fallbackValue = null,
}) => {
    const [state, setState] = useState(fallbackValue)

    useEffect(() => {        
        (
            async () => {
                const value = await promiseGetRecoil(recoilState)

                setState(transform ? transform(value) : value)
            }
        )()
    }, [])

    return [state, setState]
}