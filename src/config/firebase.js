import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyBAfhaexbQbUWTafhnC_QMamIR3F-0VRuE",
    authDomain: "chat-app-3ff6f.firebaseapp.com",
    databaseURL: "https://chat-app-3ff6f.firebaseio.com",
    projectId: "chat-app-3ff6f",
    storageBucket: "chat-app-3ff6f.appspot.com",
    messagingSenderId: "148657801865",
    appId: "1:148657801865:web:6425716d4dd6130705d458"
}

firebase.initializeApp(firebaseConfig)

export default firebase