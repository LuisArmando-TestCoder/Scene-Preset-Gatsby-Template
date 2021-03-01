import { useEffect, useState }  from 'react'
import { promiseGetRecoil } from 'recoil-outside'

export default (recoilState, options = {
    transform: null,
    fallbackValue: null,
}) => {
    const [state, setState] = useState(options.fallbackValue)

    useEffect(() => {        
        (
            async () => {
                const value = await promiseGetRecoil(recoilState)

                setState(
                    options.transform
                  ? options.transform(value)
                  : value
                )
            }
        )()
    }, [])

    return [state, setState]
}
