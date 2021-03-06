import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const HomeScreen = () => {

    const {User} = useContext(userContext);

    console.log(User)

    return (
        <>
            <h1 className="ui header">
                HomeScreen
                <div className="sub header">Sub Header</div>
            </h1> 

            <pre>
                {JSON.stringify(User, null, 3)}
            </pre>
        </>
    )
}
