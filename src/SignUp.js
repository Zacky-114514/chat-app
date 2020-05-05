import React, { useState } from 'react'
import firebase from './config/firebase'

import { Link } from 'react-router-dom'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //新規ユーザー作成処理
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>SignUp</h1>

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
                <button type='submit'>Sign Up</button>
            </form>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default SignUp