// accommodationsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const fetchAccommodations = createAsyncThunk('accommodations/fetchAccommodations', async () => {
    const accommodationsCollection = collection(db, 'accommodations');
    const accommodationsSnapshot = await getDocs(accommodationsCollection);
    return accommodationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addAccommodation = createAsyncThunk('accommodations/addAccommodation', async (accommodation) => {
    const accommodationsCollection = collection(db, 'accommodations');
    const docRef = await addDoc(accommodationsCollection, accommodation);
    return { id: docRef.id, ...accommodation }; // Return the new accommodation with its ID
});

export const updateAccommodation = createAsyncThunk('accommodations/updateAccommodation', async (accommodation) => {
    const accommodationRef = doc(db, 'accommodations', accommodation.id);
    await updateDoc(accommodationRef, accommodation);
    return accommodation; // Return the updated accommodation
});

export const deleteAccommodation = createAsyncThunk('accommodations/deleteAccommodation', async (id) => {
    const accommodationRef = doc(db, 'accommodations', id);
    await deleteDoc(accommodationRef);
    return id; // Return the ID of the deleted accommodation
});

const accommodationsSlice = createSlice({
    name: 'accommodations',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccommodations.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAccommodations.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchAccommodations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addAccommodation.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(updateAccommodation.fulfilled, (state, action) => {
                const index = state.list.findIndex(accommodation => accommodation.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            })
            .addCase(deleteAccommodation.fulfilled, (state, action) => {
                state.list = state.list.filter(accommodation => accommodation.id !== action.payload);
            });
    },
});

export default accommodationsSlice.reducer;
