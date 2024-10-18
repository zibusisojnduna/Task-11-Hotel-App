import React from 'react'
import { auth, db } from '../components/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
export default function Accommodations() {
  const [userDetails, setUserDetails] = useState(null)
  return (
    <section>
      <div style={{padding:"2%"}}>
        {userDetails && <h1>Welcome, {userDetails.email}</h1>}
        <h1>Where would you like to go?</h1><br></br>
        <input type='search' placeholder='Search for place...' className='w3-input'></input>
      </div>

      <div style={{padding:"2%"}}>
        <h1>Hotels</h1>

      </div>

      <div style={{padding:"2%"}}>
        <h1>Airbnbs</h1>
      </div>

      <div style={{padding:"2%"}}>
        <h1>Camping Areas</h1>
      </div>

      
    </section>
  )
}
