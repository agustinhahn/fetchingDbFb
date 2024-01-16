import { configureStore } from '@reduxjs/toolkit'
import palabrasReducer from '../features/palabrasSlice'
import { palabrasApi } from './services/palabrasServices'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer:{
        palabras: palabrasReducer,
        [palabrasApi.reducerPath] : palabrasApi.reducer,
    },
    middleware: (getDefaultMiddleware) => // por ahora no utilizo 
    getDefaultMiddleware().concat(palabrasApi.middleware)
})

setupListeners(store.dispatch)