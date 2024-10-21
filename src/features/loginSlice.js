import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../components/firebase'; // Import your Firebase auth
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

// Export actions
export const { loginStart, loginSuccess, loginFailure, logout } = loginSlice.actions;

// Async thunk for login
export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// Async thunk for logout
export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(logout());
};

// Export the reducer
export default loginSlice.reducer;
