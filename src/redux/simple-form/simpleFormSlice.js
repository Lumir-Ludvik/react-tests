import {createSlice} from '@reduxjs/toolkit'

export const simpleReducerSlice = createSlice({
    name: 'simpleForm',
    initialState: [
        {
            name: "Tomas Krcmar",
            email: "tomas.krcmar@email.cz"
        },
        {
            name: "Žerald z Vivije",
            email: "zerald.vivije@email.cz"
        }],
    reducers: {
        setPerson: (state, action) => {
            state.push(action.payload);
        },
        deletePerson: (state, action) => {
            return state.filter(s => s.name !== action.payload.name)
        }
    },
})

// Action creators are generated for each case reducer function
export const {setPerson, deletePerson} = simpleReducerSlice.actions

export default simpleReducerSlice.reducer
