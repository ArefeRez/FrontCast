import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    token: localStorage.getItem("token") || null,
    userName: localStorage.getItem("userName") || ""
}

export const userLogin = createAsyncThunk(
    "/auth/userLogin",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", data)
            return response.data
        } catch (error) {
            throw error
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.token = null
            state.userName = ""
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
        }
    },
    extraReducers(builder) {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("userName", action.payload.username)
            return {
                token: action.payload.token,
                userName: action.payload.username
            }
        })
        builder.addCase(userLogin.rejected, (state, action) => {
        })
    }
})

export default authSlice.reducer
export const { logout } = authSlice.actions