import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './multiple.css'

export const MultipleCusttomHook = () => {

    const {state: counter, increment} = useCounter( 1 );
    const { loadin, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`) ;
    const {author, quote} = !!data && data[0];



    return (
        <>
            <h1> Multiple Cusstom Hooks</h1>
            <hr />

            {
                loadin ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                ) 
                
                :

                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>

                )
            }

            <button className="btn btn-primary mb-5" onClick={ increment }>
                Siguiente
            </button>



        </>
    )
}
