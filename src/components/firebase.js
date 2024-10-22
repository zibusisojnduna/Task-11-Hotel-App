// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCQocQJ6i3XfXOTL_-jVj_RXgN4gwkGYk",
  authDomain: "hotel-app-a50ea.firebaseapp.com",
  databaseURL: "https://hotel-app-a50ea-default-rtdb.firebaseio.com",
  projectId: "hotel-app-a50ea",
  storageBucket: "hotel-app-a50ea.appspot.com",
  messagingSenderId: "122930594862",
  appId: "1:122930594862:web:6d7f26c5d0b53bb039cbbf",
  measurementId: "G-JTY9C58C8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);

// Function to add accommodation
export const addAccommodation = async (accommodation) => {
  try {
    const docRef = await addDoc(collection(db, 'accommodations'), accommodation);
    console.log('Accommodation added with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding accommodation:', error);
  }
};

// Function to fetch accommodations
export const fetchAccommodations = async () => {
  const accommodationsCollection = collection(db, 'accommodations');
  const accommodationsSnapshot = await getDocs(accommodationsCollection);
  const accommodationsList = accommodationsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  
  return accommodationsList; // This return is now inside the function
};
