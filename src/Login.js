import React, { useState, useContext } from 'react'
import firebase from './config/firebase'

import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './AuthServise'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='E-mail'>E-mail</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type='email'
                        id='email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        id='password'
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Login