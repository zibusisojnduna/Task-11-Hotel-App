function Login(){
    return(
    <div style={{ justifyContent:"center", alignItems:"center", height:"100vh", width:"100vw", textAlign:"center"}}>
        <h1>Login</h1><br></br>
        <p>Please enter the following details</p>
        <form style={{padding:"2%"}}>
            <input type="text" placeholder="Email" style={{margin:"1%"}}/><br></br>
            <input type="password" placeholder="Password" style={{margin:"1%"}}/><br></br>
            <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Login</button>

            <p>or if you don't have an account yet<br></br></p>
        </form>
    </div>
    )
}
export default Login