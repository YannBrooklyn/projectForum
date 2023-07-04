export default function Profil() {
    return (
        <main style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <section style={{width:"90%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h2>Yann Massoro</h2>
                    <h3>Administrateur</h3>
                    <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                        <img src="/image/default/banniere.jpg" style={{height:"20vh", width:"100%"}} alt="" />
                        <img src="/image/default/profil.jpg" alt="" style={{height:"15vh", width:"15vw", borderRadius:"100%", position:"absolute", top:"vh"}} />
                        <h4>Posts:</h4>
                        <h4></h4>
                        <h4>Like:</h4>
                        <h4></h4>
                    </div>
                    <div style={{width:"100%", display:"flex", flexDirection:"row"}}>
                    <img src="/image/default/profil.jpg" alt="" style={{height:"3vh", width:"3vw", borderRadius:"100%"}} />
                        <input type="text" />
                        <button>
                            <img src="/image/default/profil.jpg" alt="" style={{height:"15vh", width:"15vw", borderRadius:"100%"}} />
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