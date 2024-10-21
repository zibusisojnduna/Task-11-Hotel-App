import { useState } from "react"
import { register } from "../features/signupSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { set } from "firebase/database"

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [matchError, setMatchError] = useState("")
    const { error } = useSelector((state) => state.register)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setMatchError("")
        if (password !== confirmPassword){
            setMatchError("Passwords do not match!")
            return
        }
        
        await dispatch(register(name, email, phone, password))
        if (!error){
            navigate("/login")
    }

    return(
        <section style={{textAlign:"center"}}>
            <div>
                <h1>Sign Up</h1>
                <p>Please enter the following fields</p>

                <form onSubmit={handleSubmit} style={{textAlign:"center", padding:"5%"}}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required style={{margin:"1%"}}></input><br></br>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required style={{margin:"1%"}}></input><br></br>
                    <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required style={{margin:"1%"}}></input><br></br>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{margin:"1%"}}></input><br></br>
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{margin:"1%"}}></input><br></br>
                    <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Sign Up</button>

                </form>
            </div>
        </section>
    )
}
}
