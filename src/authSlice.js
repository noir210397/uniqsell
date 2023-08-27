import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// 

const initialState = {
    isLoading: true,
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createAccount: async (state, action) => {
            const email = action.payload.emailAddress
            const password = action.payload.password
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password)
                console.log(user.user)
            }
            catch (err) {
                console.log(err.message)
            }

        },
    }
})
export const { createAccount } = authSlice.actions
export default authSlice.reducer