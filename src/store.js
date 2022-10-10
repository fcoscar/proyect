import { configureStore } from '@reduxjs/toolkit'
import { Auth } from './redux/reducers/auth'
import { Category } from './redux/reducers/category'

export const store = configureStore({
    reducer: {
        Auth,
        Category
    }
})