import { Link } from "react-router-dom"
function Login(){
    return(
    <div style={{ justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw", textAlign:"center"}}>
        <h1>Login</h1><br></br>
        <p>Please enter the following details</p>
        <form style={{padding:"2%"}}>
            <input type="text" placeholder="Email" style={{margin:"1%"}}/><br></br>
            <input type="password" placeholder="Password" style={{margin:"1%"}}/><br></br>
            <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Login</button>

            <p>or if you don't have an account yet</p><br></br>
            <Link to={"/signup"} style={{color:"#4777a1"}}>Sign Up</Link>
        </form>
    </div>
    )
}
export default Login