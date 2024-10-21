import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import 'firebase/auth';

export const signUpUser = createAsyncThunk(
    'signup/signUpUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            return userCredential.user; // Return user info on success
        } catch (error) {
            return rejectWithValue(error.message); // Return error message
        }
    }
);

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Set user data on success
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set error message
            });
    },
});

export const { resetError } = signupSlice.actions;
export default signupSlice.reducer;
