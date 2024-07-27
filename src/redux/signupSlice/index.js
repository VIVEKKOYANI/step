import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUp: JSON.parse(localStorage.getItem("signUp")) || [],
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    addNewMember: (state, action) => {
      state.signUp = [...state.signUp, action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewMember } = signupSlice.actions

export default signupSlice.reducer