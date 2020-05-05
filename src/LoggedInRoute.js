import React, { useContext } from 'react'
import { AuthContext } from './AuthServise'
import { Route, Redirect } from 'react-router-dom'

const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    )
}

export default LoggedInRoute