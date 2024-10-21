import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import 'firebase/auth';

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            return userCredential.user; // Return user info on success
        } catch (error) {
            return rejectWithValue(error.message); // Return error message
        }
    }
);

const loginSlice = createSlice({
    name: 'login',
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
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Set user data on success
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set error message
            });
    },
});

export const { resetError } = loginSlice.actions;
export default loginSlice.reducer;
