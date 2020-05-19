import React, { useState, useContext } from 'react'
import firebase from './config/firebase'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'
import { isValidPassword, isValidEmail } from './validation'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        if (isValidEmail && isValidPassword) {
            e.preventDefault()
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    history.push('/')
                })

                .catch(err => {
                    console.log(err)
                })
        }
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
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        name="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span>{isValidEmail(email) ? '' : '正しいEmailアドレスを入力してください'}</span>
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        name="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span>{isValidPassword(password) ? '' : '6文字以上入力してください'}</span>
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Login