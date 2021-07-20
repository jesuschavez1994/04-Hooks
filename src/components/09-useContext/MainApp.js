import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { userContext } from './UserContext'

export const MainApp = () => {

    const [User, setUser] = useState({})

    return (
        <userContext.Provider value={{
            User,
            setUser
        }}>
            <AppRouter />
        </userContext.Provider>
    )
}
