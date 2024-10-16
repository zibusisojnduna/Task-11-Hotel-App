import React from 'react'

export default function Profile() {
  return (
    <section style={{textAlign:"center"}}>
      <div>
        <h1>Profile</h1>
      </div>

      <div>
        <img aria-placeholder='Img'></img><br></br>
        <input type='text' placeholder='Full Name'></input><button className='w3-button' style={{color:"white",backgroundColor:"green", margin:'1%' }}>Edit</button><br></br>
        <input type='text' placeholder='Email'></input><button className='w3-button' style={{color:"white",backgroundColor:"green", margin:'1%' }}>Edit</button><br></br>
        <input type='text' placeholder='Phone'></input><button className='w3-button' style={{color:"white",backgroundColor:"green", margin:'1%' }}>Edit</button><br></br>
        <input type='password' placeholder='Password'></input><button className='w3-button' style={{color:"white",backgroundColor:"green", margin:'1%' }}>Edit</button><br></br>


      </div>

      <div>
        <button className='w3-button' style={{backgroundColor:"#0d4a75", color:"white", margin:"2%"}}>History</button>
        <button className='w3-button' style={{backgroundColor:"#0d4a75", color:"white", margin:"2%"}}>Favorites</button>
        <button className='w3-button' style={{backgroundColor:"red", color:"white", margin:"2%"}}>Delete Profile</button>

      </div>
    </section>
  )

    }
