import React from 'react'
import Modal2 from '../components/modal2'
import Modal from '../components/modal'

export default function AccommodationList() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  return (
    <div>
        <h1>Accommodations</h1>
        <div>
          <button onClick={{openModal}} className='w3-button' style={{backgroundColor:"#0d4a75", color:"white"}}>Add New Accommodation</button>
          

          <Modal2 isOpen={isModalOpen}>
            <button className='w3-button' style={{backgroundColor:"green", color:"white"}}>Add</button>
          </Modal2>
        </div>
    </div>
  )
}
