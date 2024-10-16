

export default function Signup() {
    return(
        <section style={{textAlign:"center"}}>
            <div>
                <h1>Sign Up</h1>
                <p>Please enter the following fields</p>

                <form style={{textAlign:"center", padding:"5%"}}>
                    <input type="text" placeholder="Full Name" style={{margin:"1%"}}></input><br></br>
                    <input type="email" placeholder="Email Address"style={{margin:"1%"}}></input><br></br>
                    <input type="text" placeholder="Phone Number" style={{margin:"1%"}}></input><br></br>
                    <input type="password" placeholder="Password" style={{margin:"1%"}}></input><br></br>
                    <input type="password" placeholder="Confirm Password" style={{margin:"1%"}}></input><br></br>
                    <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Sign Up</button>

                </form>
            </div>
        </section>
    )
}
