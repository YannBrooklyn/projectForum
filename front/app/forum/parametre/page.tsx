export default function Parametre() {
    return(
        <main style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"white"}}>
            <h1>Parametre Compte</h1>
            <section style={{width:"90%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <ComponentParametre/>
            </section>
        </main>
    )
}

function ComponentParametre(){
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
            <h4>Banniere Profil</h4>
            <img src="/image/default/banniere.jpg" alt="" />
            <input type="file" name="" id="" />
            <div style={{display:"flex", width:"100%", gap:"3vh"}}>

                <div style={{width:"47%", display:"flex", flexDirection:"column", gap:"2vh"}}>
                    <h4>Pseudonyme</h4>
                    <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="Choisi ton pseudo" type="text" />
                    <h4>Email</h4>
                    <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="exemple@exemple.com" type="email" />
                </div>
                <div style={{width:"47%", display:"flex", flexDirection:"column", gap:"2vh"}}>
                    <h4>Mot de passe</h4>
                    <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} type="password" />
                    <h4>Mot de passe confirmation</h4>
                    <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} type="password" />
                    <h4>Photo de profil</h4>
                    <img src="/image/default/profil.jpg" alt="" />
                    <input type="file" />
                </div>
            </div>
            <button className="rounded-full" style={{background:"#181818", borderColor:"black", borderWidth:"0.1vh", borderStyle:"solid", height:"3vh", width:"12vh", color:"white"}}>Appliquer</button>
        </div>
    )
}

