import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const AboutScreen = () => {

    const {User, setUser} = useContext(userContext);

    const handleReset = () => {
        setUser({});
    }

    return (
        <>
            <h1 className="ui header">
                AboutScreen
                <div className="sub header">Sub Header</div>
            </h1> 

            <pre>
                {JSON.stringify(User, null, 3)}
            </pre>

            <button className="ui inverted red button" onClick={handleReset}>Reset</button>
        </>
    )
}
