export default function NewActualite() {
    return(
        <>
        <section style={{width:"100%", color:"white", display:"flex", flexDirection:"column", alignItems:"center", gap:"5vh"}}>

            <h2 style={{fontSize:"5vh"}}>Nouvelles Actualité</h2>
            <input type="text" name="" placeholder="Votre titre..." id="" style={{width:"80%", backgroundColor:"#181818"}} />
            <textarea name="" id="" cols="30" rows="10" placeholder="Votre texte..." style={{resize:"none",width:"80%", backgroundColor:"#181818"}}></textarea>
            <button className="rounded-full" style={{background:"#181818", borderColor:"black", borderWidth:"0.1vh", borderStyle:"solid", height:"3vh", width:"12vh"}}>Poster</button>
        </section>
        </>
    )
}