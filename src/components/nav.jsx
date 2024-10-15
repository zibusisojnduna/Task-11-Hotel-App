import { LuHome } from "react-icons/lu";
import { IoBed } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import { TfiCheckBox } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import "../assets/w3.css"
function Navigation(){
    return(
      <div className="w3-bar w3-black" style={{}}>
      <a href="#" className="w3-bar-item w3-button w3-mobile">Home</a>
      <a href="#" className="w3-bar-item w3-button w3-mobile">Accommodation</a>
      <a href="#" className="w3-bar-item w3-button w3-mobile">Login</a>
      <a href="#" className="w3-bar-item w3-button w3-mobile">Sign Up</a>
    </div>
    )
}
export default Navigation