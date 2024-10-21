import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice';
import registerReducer from './features/signupSlice';
import accommodationsReducer from './features/accommodationsSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    register:registerReducer,
    accommodations: accommodationsReducer,
  },
});

export default store;
