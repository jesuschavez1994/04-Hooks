import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'


export const MemoHook = () => {

    const {state: counter, increment} = useCounter( 100 );
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [counter])

    return (
        <>
            <h1>MemoHook: <small> {counter} </small> </h1>
            <hr />

            <p>{ memoProcesoPesado }</p>

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

