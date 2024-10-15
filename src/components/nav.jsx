import { LuHome } from "react-icons/lu";
import { IoBed } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import { TfiCheckBox } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { IoIosCart } from "react-icons/io";

function Navigation(){
    return(
        <div className="w3-bar" style={{backgroundColor:"#a8bfe6"}}>
        <a></a>
        <a href="/" class="w3-bar-item w3-button"><LuHome/>Home</a>
        <a href="" className="w3-bar-item w3-button"><IoBed/>Accommodation</a>
        <a href="" className="w3-bar-item w3-button"><LuCheckCircle/>Login</a>
        <a href="" className="w3-bar-item w3-button"><TfiCheckBox/>Sign Up</a>
        <a href="/" class="w3-bar-item w3-button"><IoMdPerson/>Profile</a>
        <a href="/" class="w3-bar-item w3-button"><IoIosCart/>Cart</a>
      </div>
    )
}
export default Navigation