import React, { useState } from 'react'
import firebase from './config/firebase'

import { Link } from 'react-router-dom'
import { isValidPassword, isValidEmail, isValidName } from './validation'


const SignUp = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //新規ユーザー作成処理
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .then(() => {
                history.push('/login')
            })

            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>SignUp</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type='name'
                        id='name'
                    />
                    <span>{isValidName(name) ? '' : '名前を5文字以上入力してください'}</span>
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type='email'
                        id='email'
                    />
                    <span>{isValidEmail(email) ? '' : '正しいEmailアドレスを入力してください'}</span>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        id='password'
                    />
                    <span>{isValidPassword(password) ? '' : '6文字以上入力してください'}</span>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default SignUp