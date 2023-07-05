export default function NewTopic() {
    return(
        <main style={{width:"100%", color:"white", display:"flex", flexDirection:"column", alignItems:"center", gap:"5vh"}}>
            <h2 style={{fontSize:"5vh"}}>Nouveau Topic</h2>
            <input type="text" name="" placeholder="Votre titre..." id="" style={{width:"80%", backgroundColor:"#181818"}} />
            <textarea name="" id="" cols="30" rows="10" placeholder="Votre texte..." style={{resize:"none",width:"80%", backgroundColor:"#181818"}}></textarea>
            <button style={{position:"absolute", top:"72vh", right:"10vw", background:"#181818", borderRadius:"5vh", borderColor:"black", borderWidth:"0.4vh", borderStyle:"solid", width:"15vw"}}>Poster</button>
        </main>
    )
}