import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {state: counter, increment} = useCounter();
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr />

            <button className="btn btn-primary" onClick={ increment }>
                Incrementar + 1 
            </button>

            <button className="btn btn-danger" onClick={() => {
                setShow( !show )
            }}>
               Show/hiden:  {JSON.stringify( show )}
            </button>
        </>
    )
}
