export default function Profil() {
    return (
        <main style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"white"}}>
            <section style={{width:"90%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h2 style={{fontSize:"5vh"}}>Yann Massoro</h2>
                    <h3 style={{fontSize:"3vh"}}>Administrateur</h3>
                    <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src="/image/default/banniere.jpg" style={{height:"25vh", width:"100%"}} alt="" />
                        <img src="/image/default/profil.jpg" alt="" style={{borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black", height:"15vh", width:"20vw", borderRadius:"100%", position:"absolute", top:"41vh", left:"8vw"}} />
                        <h4>Posts:</h4>
                        <h4>44</h4>
                        <h4>Like:</h4>
                        <h4>587</h4>
                    </div>
                    <div style={{width:"100%", display:"flex", flexDirection:"row", gap:"5vw"}}>
                    <img src="/image/default/profil.jpg" alt="" style={{height:"4vh", width:"6vw", borderRadius:"100%"}} />
                        <input type="text" style={{height:"4vh", width:"80%", color:"black"}} />
                        <button style={{height:"4vh", width:"7vw", backgroundColor:"unset"}}>
                            <img src="/image/icone/send.png" alt="" style={{height:"100%", width:"100%"}} />
                        </button>
                    </div>
                </div>
            </section>
            <section>
                {/* Post profil */}
            </section>
        </main>
    )
}