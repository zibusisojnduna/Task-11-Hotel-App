import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../components/firebase"
import { setDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
   
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        try{
           await createUserWithEmailAndPassword(auth, email, password)
           const user =auth.currentUser
           console.log(user)
           if(user){
            await setDoc(doc(db, "users", user.uid), {
                email:user.email,
                name:name,
                phone:phone,
            })

           }
           console.log("User Created")
           toast.success("User created sucessfully!", {
            position:"top-center"
           })
        }catch(error){
            console.log(error.message)
            toast.error("User creation failed!", {
                position:"top-center"
            })
        }
    }

    return(
        <section style={{textAlign:"center"}}>
            <div>
                <h1>Sign Up</h1>
                <p>Please enter the following fields</p>

                <form onSubmit={handleSignUp} style={{textAlign:"center", padding:"5%"}}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{margin:"1%"}}></input><br></br>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{margin:"1%"}}></input><br></br>
                    <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{margin:"1%"}}></input><br></br>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{margin:"1%"}}></input><br></br>
                    <input type="password" placeholder="Confirm Password"  style={{margin:"1%"}}></input><br></br>
                    <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}>Sign Up</button>

                </form>
            </div>
        </section>
    )
}
