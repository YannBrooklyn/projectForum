export default function ModalMessagePrivee() {
    return (
        <div id="divModalEditer" style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed", top:"0"}}>
            <div id="ModalEditer" style={{display:"flex", justifyContent:"center", gap:"10vh", alignItems:"center", flexDirection:"column" ,height:"50%", width:"80%", position:"fixed", backgroundColor:"#292929", color:"white"}}>
                <h2>Edition du texte</h2>
                
                <textarea name="" id="textareaModalEditer" cols="30" rows="10" placeholder="Ecrivez votre texte..."></textarea>
                <button className="rounded-full" style={{color:"white", backgroundColor:"#3D8AFF", height:"3vh", width:"12vh"}}>Editer</button>
            </div>
        </div>
    )
}