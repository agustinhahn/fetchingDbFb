import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        palabras: [],
    }
}

export const palabrasSlice = createSlice({

    name: "palabras",
    initialState,
    reducers: {
        setPalabras: (state, action) => {
            state.value.palabras = action.payload
        },
    }
})

export const { setPalabras } = palabrasSlice.actions

export default palabrasSlice.reducer