import React from 'react'
import Payment from '../components/payment'
import { Link } from 'react-router-dom'
export default function paymentGate() {
  return (
    <div><h1>Payment Gateway</h1>
    <Payment/>
    <button className='w3-button' style={{backgroundColor:"blue"}}><Link to={"/profile"}>Pay Now</Link></button>
    </div>
  )
}
