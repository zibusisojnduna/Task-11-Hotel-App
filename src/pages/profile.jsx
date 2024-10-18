import React from 'react'
import { auth, db } from '../components/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
export default function Profile() {
  const [userDetails, setUserDetails] = useState(null)
  const fetchUserData = async(user) => {
    console.log
  }
  return (
    <section style={{textAlign:"center"}}>
      <div>
        <h1>Profile</h1>
      </div>

      <div>
       {/* {userDetails ? (
        <>

        </>
       )} */}

      </div>

      <div>
        <button className='w3-button' style={{backgroundColor:"#0d4a75", color:"white", margin:"2%"}}>History</button>
        <button className='w3-button' style={{backgroundColor:"#0d4a75", color:"white", margin:"2%"}}>Favorites</button>
        <button className='w3-button' style={{backgroundColor:"red", color:"white", margin:"2%"}}>Delete Profile</button>

      </div>
    </section>
  )

    }
