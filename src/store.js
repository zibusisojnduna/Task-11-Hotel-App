import { configureStore } from '@reduxjs/toolkit'
import  loginReducer  from './features/loginSlice'
import signupReducer from './features/signupSlice'

export const store = configureStore({
  reducer: {
    login:loginReducer,
    signup:signupReducer    
  },
})