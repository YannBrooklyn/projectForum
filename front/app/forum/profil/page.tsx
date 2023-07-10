export default function Profil() {
    return (
        <main style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"white"}}>
            <section style={{width:"90%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h2 style={{fontSize:"5vh"}}>Yann Massoro</h2>
                    <h3 style={{fontSize:"3vh"}}>Administrateur</h3>
                    <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src="/image/default/banniere.jpg" style={{height:"25vh", width:"100%"}} alt="" />
                        <img id="avatarProfil" src="/image/default/profil.jpg" alt="" style={{borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black", height:"10vh", width:"10vh", borderRadius:"100%", position:"absolute", top:"39vh", left:"5vh"}} />
                        <h4>Posts:</h4>
                        <h4>44</h4>
                        <h4>Like:</h4>
                        <h4>587</h4>
                    </div>
                    <div style={{width:"100%", display:"flex", flexDirection:"row", gap:"5vw"}}>
                    <img src="/image/default/profil.jpg" alt="" style={{height:"4vh", width:"4vh", borderRadius:"100%"}} />
                        <input type="text" style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="Ecrivez un message..." />
                        <button style={{height:"3vh", width:"3vh", backgroundColor:"unset"}}>
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
