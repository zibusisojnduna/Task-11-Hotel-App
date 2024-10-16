import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Layout from './pages/layout'
import Login from './pages/login'
import Signup from './pages/signup'
import Accommodations from './pages/accommodations'
import Profile from './pages/profile'
import Cart from './pages/cart'
import AdminProfile from './pages/adminProfile'
import AccommodationList from './pages/adminAccommodationList'
import NoPage from './pages/noPage'
import { getDatabase, ref, onValue } from "firebase/database";


function App() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   // Initialize the Firebase database with the provided configuration
  //   const database = getDatabase(cong);
    
  //   // Reference to the specific collection in the database
  //   const collectionRef = ref(database, "your_collection");

  //   // Function to fetch data from the database
  //   const fetchData = () => {
  //     // Listen for changes in the collection
  //     onValue(collectionRef, (snapshot) => {
  //       const dataItem = snapshot.val();

  //       // Check if dataItem exists
  //       if (dataItem) {
  //         // Convert the object values into an array
  //         const displayItem = Object.values(dataItem);
  //         setData(displayItem);
  //       }
  //     });
  //   };

  //   // Fetch data when the component mounts
  //   fetchData();
  // }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Landing/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='accommodations' element={<Accommodations/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='admin_profile' element={<AdminProfile/>}/>
            <Route path='admin_accommodation_list' element={<AccommodationList/>}/>
            <Route path='no_page' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
