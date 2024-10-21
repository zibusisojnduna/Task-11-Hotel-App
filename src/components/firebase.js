// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { db } from './firebase'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const addAccommodation = async (accommodation) => {
  try {
    const docRef = await addDoc(collection(db, 'accommodations'), accommodation);
    console.log('Accommodation added with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding accommodation:', error);
  }
};

const fetchAccommodations = async () => {
  const accommodationsCollection = collection(db, 'accommodations');
  const accommodationsSnapshot = await getDocs(accommodationsCollection);
  const accommodationsList = accommodationsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
};

return accommodationsList;
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();
export const db=getFirestore(app);
export default app