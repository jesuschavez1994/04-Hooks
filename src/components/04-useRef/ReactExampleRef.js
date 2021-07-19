import React, { useState } from 'react'
import { MultipleCusttomHook } from '../03-examples/MultipleCusttomHook'


export const ReactExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>ReactExampleRef</h1>
            <hr />

            { show && <MultipleCusttomHook /> }

            <button className="btn btn-primary mt-5" onClick={ () => {
                setShow(!show);
            }}>
                Show
            </button>
            
        </>
    )
}
