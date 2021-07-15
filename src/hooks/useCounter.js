import { useState } from "react";


export const useCounter = ( inicialState = 10 ) => {

    const [state, setstate] = useState(inicialState);

    const increment = ( factor = 2) => {
        setstate( state + factor );
    }

    const decrement = ( factor = 2) => {
        setstate( state - factor );
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
