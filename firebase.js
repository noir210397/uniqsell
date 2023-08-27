import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAVwpBXXv-NfZJvoYdtVd8LfydtQCPhG6I",
    authDomain: "uniqsell-e6372.firebaseapp.com",
    projectId: "uniqsell-e6372",
    storageBucket: "uniqsell-e6372.appspot.com",
    messagingSenderId: "179693285746",
    appId: "1:179693285746:web:1b7648d0e028e543952deb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)