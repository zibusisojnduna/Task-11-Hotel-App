import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/modal'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from 'react';
import {fetchAccommodations} from '../features/accommodationsSlice'

export default function Accommodations() {
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()
  const { accommodations} = useSelector((state) => state.accommodations)  
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  useEffect(() => {
    dispatch(fetchAccommodations())
  }, [dispatch])

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
            <h1>Hotel 1</h1><br></br>
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


      <Modal isOpen={isModalOpen}>
        <button className='w3-button' onClick={closeModal}><FaArrowLeft /></button>
        <div>
        


          <button className='w3-button' style={{backgroundColor:"blue"}}><Link to={"/cart"} style={{color:"white"}}>Confirm</Link></button>
          
        </div>

        </Modal>
      
    </section>
  )
}
