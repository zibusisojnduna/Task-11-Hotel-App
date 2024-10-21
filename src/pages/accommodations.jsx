import React, { useState } from 'react'
import { auth, db } from '../components/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Modal from '../components/modal'
import { Link } from 'react-router-dom'

export default function Accommodations() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <section>
      <div style={{padding:"2%"}}>
        <h1>Where would you like to go?</h1><br></br>
        <input type='search' placeholder='Search for place...' className='w3-input'></input>
      </div>

      <div style={{padding:"2%"}}>
        <h1>Hotels</h1>
        <div style={{display:"flex"}}>
          <div>
            <h1>hosihvhvsp</h1><br></br>
            <button onClick={openModal} className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Book Now</button>
          </div>
          <div style={{width:"50%", padding:"2%"}}>
            <h1>Hotel 2</h1>
          </div>
          <div style={{width:"50%", padding:"2%"}}>
            <h1>Hotel 3</h1>
          </div>
          <div style={{width:"50%", padding:"2%"}}>
            <h1>Hotel 4</h1>
          </div>
        </div>

      </div>

      <div style={{padding:"2%"}}>
        <h1>Airbnbs</h1>
      </div>

      <div style={{padding:"2%"}}>
        <h1>Camping Areas</h1>
      </div>


      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <button className='w3-button'><Link to={"/cart"} style={{color:"white"}}>Confirm</Link></button>
        </div>

        </Modal>
      
    </section>
  )
}
