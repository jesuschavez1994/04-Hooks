import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const UseLayoutEffect = () => {

    const {state: counter, increment} = useCounter( 1 );
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pref = useRef();

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize( pref.current.getBoundingClientRect() )
    }, [quote])

    return (
        <>
            <h1> Multiple Cusstom Hooks</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p className="mb-o" ref={pref}>{ quote }</p>
            </blockquote>
            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>
            <button className="btn btn-primary mb-5" onClick={ increment }>
                Siguiente
            </button>
        </>
    )
}



