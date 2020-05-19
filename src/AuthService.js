import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])/*第二引数に空の配列を渡すことで、１度だけ実行するようにしている */

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthContext,
    AuthProvider
}