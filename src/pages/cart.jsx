import React from 'react'
import { Link } from 'react-router-dom'
export default function Cart() {
  return (
    <section style={{textAlign:"center"}}>
      <h1>Cart</h1>
       <div>
        <th>
          
        </th>
        <button className='w3-button' style={{backgroundColor:"#0d4a75", color:"white"}}><Link to={"/paymentGate"}>Checkout</Link></button>
       </div>
    </section>
   
  )
}
