import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { login} from "../features/loginSlice"
import { useDispatch, useSelector } from "react-redux" 

function Login(){
const {error} = useSelector((state) => state.login)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))

    if (!error){
        navigate("/accommodations")
    }
    
}



    return(
    <div style={{ justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw", textAlign:"center"}}>
        <h1>Login</h1><br></br>
        <p>Please enter the following details</p>
        <form onSubmit={handleSubmit} style={{padding:"2%"}}>
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