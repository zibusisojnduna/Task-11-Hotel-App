import { Link } from 'react-router-dom'
function Landing(){
    return(
        <section style={{display:"flex"}}>
             <div style={{textAlign:'center', padding:'2%'}}>
            <h1>Welcome to Stayby.com . Looking for a place to stay?</h1>
            <button className="w3-button" style={{backgroundColor:"#0d4a75", color:"white"}}><Link to="/login" style={{color:"white"}}>Login</Link></button>
            </div>

            <div style={{backgroundImage:`url(${require('../assets/kristin-ellis-qHlUwZLS5F4-unsplash.jpg')})`, backgroundSize:"cover", backgroundPosition:"center", height:"100vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
                
            </div>
        </section>
       
    )
}
export default Landing