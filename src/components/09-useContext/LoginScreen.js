import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(userContext)

    return (
        <div>
            <h1 className="ui header">
                LoginScreen
                <div className="sub header">Sub Header</div>
            </h1> 

            <button className="ui inverted orange button" onClick={() => {
                setUser({
                    id:123,
                    name: 'jesus chavez'
                })
            }}>Orange</button>
        </div>
    )
}
