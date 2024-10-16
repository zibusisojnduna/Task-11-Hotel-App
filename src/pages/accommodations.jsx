import React from 'react'

export default function Accommodations() {
  return (
    <section>
      <div style={{padding:"2%"}}>
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
