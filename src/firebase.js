//updated to version 9
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = ({
    apiKey: "AIzaSyB8junZDb356Ew36BGzmUwbQKwVdpHRnbo",
    authDomain: "authentication-developme-1804e.firebaseapp.com",
    databaseURL: "https://authentication-developme-1804e-default-rtdb.firebaseio.com",
    projectId: "authentication-developme-1804e",
    storageBucket: "authentication-developme-1804e.appspot.com",
    messagingSenderId: "774732296522",
    appId: "1:774732296522:web:daad41ff30cee945c151b3"
})
//function to give authentication instance
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
//to be used everywhere else