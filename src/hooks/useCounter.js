import { useState } from "react";


export const useCounter = ( inicialState = 100 ) => {

    const [state, setstate] = useState(inicialState);

    const increment = () => {
        setstate( state + 1 );
    }

    const decrement = () => {
        setstate( state - 1 );
    }

    const reset = () => {
        setstate( inicialState )
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}
