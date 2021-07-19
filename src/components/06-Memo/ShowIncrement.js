import React from 'react'

export const ShowIncrement = React.memo(({ incrementar }) => {

    console.log('Me volvi a generar :/');
    return (
        <button className="btn btn-primary" onClick={() => {
            incrementar( 5 );
        }}>
            Incrementar
        </button>
    )
})
