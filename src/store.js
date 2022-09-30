import { configureStore } from '@reduxjs/toolkit'
import { Auth } from './redux/reducers/auth'

export const store = configureStore({
    reducer: {
        Auth: Auth
    }
})