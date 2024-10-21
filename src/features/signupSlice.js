// registerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../components/firebase'; // Import your Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;

// Async thunk for registration
export const register = (email, password) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(registerSuccess(userCredential.user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// Export the reducer
export default registerSlice.reducer;
