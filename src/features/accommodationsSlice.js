import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../components/firebase'; // Adjust the path as necessary
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// Define an initial state
const initialState = {
  accommodations: [],
  loading: false,
  error: null,
};

// Async thunk for fetching accommodations
export const fetchAccommodations = createAsyncThunk(
  'accommodations/fetchAccommodations',
  async () => {
    const accommodationsCollection = collection(db, 'accommodations');
    const accommodationsSnapshot = await getDocs(accommodationsCollection);
    const accommodationsList = accommodationsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return accommodationsList;
  }
);

// Async thunk for adding an accommodation
export const addAccommodation = createAsyncThunk(
  'accommodations/addAccommodation',
  async (accommodation) => {
    const docRef = await addDoc(collection(db, 'accommodations'), accommodation);
    return { id: docRef.id, ...accommodation };
  }
);

// Async thunk for updating an accommodation
export const updateAccommodation = createAsyncThunk(
  'accommodations/updateAccommodation',
  async ({ id, updatedData }) => {
    const accommodationRef = doc(db, 'accommodations', id);
    await updateDoc(accommodationRef, updatedData);
    return { id, updatedData };
  }
);

// Async thunk for deleting an accommodation
export const deleteAccommodation = createAsyncThunk(
  'accommodations/deleteAccommodation',
  async (id) => {
    const accommodationRef = doc(db, 'accommodations', id);
    await deleteDoc(accommodationRef);
    return id;
  }
);

// Create accommodations slice
const accommodationsSlice = createSlice({
  name: 'accommodations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccommodations.fulfilled, (state, action) => {
        state.loading = false;
        state.accommodations = action.payload;
      })
      .addCase(fetchAccommodations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addAccommodation.fulfilled, (state, action) => {
        state.accommodations.push(action.payload);
      })
      .addCase(updateAccommodation.fulfilled, (state, action) => {
        const { id, updatedData } = action.payload;
        const index = state.accommodations.findIndex(accom => accom.id === id);
        if (index !== -1) {
          state.accommodations[index] = { ...state.accommodations[index], ...updatedData };
        }
      })
      .addCase(deleteAccommodation.fulfilled, (state, action) => {
        const id = action.payload;
        state.accommodations = state.accommodations.filter(accom => accom.id !== id);
      });
  },
});

// Export the reducer
export default accommodationsSlice.reducer;

// Export the async thunks
export { fetchAccommodations, addAccommodation, updateAccommodation, deleteAccommodation };
