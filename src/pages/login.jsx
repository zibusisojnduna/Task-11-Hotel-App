import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../components/firebase"
import { toast } from "react-toastify"
function Login(){
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = async(e) => {
    e.preventDefault()
try{
    await auth.signInWithEmailAndPassword(auth,email, password)
    console.log("User login sucessfull")
    window.location.href="/"
    toast.success("User login sucessfull!", {
        position:"top-center"
    })
}catch (error) {
    console.log(error.message)
    toast.error("User login failed!", {
        position:"top-center"
    })

}
}
    return(
    <div style={{ justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw", textAlign:"center"}}>
        <h1>Login</h1><br></br>
        <p>Please enter the following details</p>
        <form style={{padding:"2%"}}>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{margin:"1%"}}/><br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{margin:"1%"}}/><br></br>
            <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Login</button>

            <p>or if you don't have an account yet</p><br></br>
            <Link to={"/signup"} style={{color:"#4777a1"}}>Sign Up</Link>
        </form>
    </div>
    )
}
export default Login