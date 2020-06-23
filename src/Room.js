import React, { useEffect, useState, useContext } from 'react'
import firebase from '../src/config/firebase'
import { AuthContext } from './AuthService'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    const user = useContext(AuthContext)

    useEffect(() => {
        firebase.firestore().collection('messages').orderBy('date')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        firebase.firestore().collection('messages')
            .add(
                {
                    user: user.displayName,
                    content: value,
                    date: new Date()
                })

        setMessages([
            ...messages,
            {
                user: user.displayName,
                email: user.email,
                message: value
            }
        ])
    }

    const deleteSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('messages')
            .delete(
                {
                    date: new Date()
                })
    }


    return (
        <>
            <h1>Room</h1>

            <ul>
                {
                    messages ?
                        messages.map(message => (
                            <li>{message.user}:{message.content}</li>
                        )) :
                        <p>メッセージがありません</p>

                }
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>

            {/* 6/23削除ボタン一旦はとめます */}
            {/* <from onSnapshot={}>

                <button type="submit">削除</button>
            </from> */}

            <button onClick={() => firebase.auth().signOut()}>Logout</button>

        </>
    )
}

export default Room