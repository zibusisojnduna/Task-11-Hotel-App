import { LuHome } from "react-icons/lu";
import { IoBed } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import { TfiCheckBox } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import "../assets/w3.css"
function Navigation(){
    return(
      <div className="w3-bar" style={{backgroundColor:"#EEEEEE", display:"flex", padding:"5%", justifyContent:"space-around", alignItems:"center",}}>
      <a href="/" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><LuHome style={{color:"#0d4a75"}}/><br></br>Home</a><br></br>
      <a href="/accommodations" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><IoBed style={{color:"#0d4a75"}}/><br></br>Accommodation</a>
      <a href="/login" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><LuCheckCircle style={{color:"#0d4a75"}}/><br></br>Login</a>
      <a href="/signup" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><TfiCheckBox style={{color:"#0d4a75"}}/><br></br>Sign Up</a>
      <a href="/profile" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><IoMdPerson style={{color:"#0d4a75"}}/><br></br>Profile</a>
      <a href="/cart" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%",textAlign:"center"}}><IoIosCart style={{color:"#0d4a75"}}/><br></br>Cart</a>
    </div>
    )
}
export default Navigation