import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBAck = () => {

    const [counter, SetCounter] = useState(10);
    // const incrementar = () => {
    //     SetCounter( counter + 1)
    // }
    const incrementar = useCallback(
        (num) => {
            SetCounter( c => c  + num)
        },
        [SetCounter],
    )

    return (
        <>
           <h1>Callback: <small>{counter}</small></h1> 
           <hr />

           <ShowIncrement incrementar = { incrementar }/>
        </>
    )
}
