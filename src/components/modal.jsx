function Modal({isOpen, onClose, children}){
    if (!isOpen) return null

    return(
        <div style={{position:"fixed", top:"0", left:"0", right:"0", bottom:"0", backgroundColor:"white", justifyContent:"center", alignItems:"center"}} onClick={onClose}>
        
            
            {children}
        </div>
    )
}
export default Modal