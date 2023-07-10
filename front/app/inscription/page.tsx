export default function Inscription() {
    return (
        <main className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center" style={{gap:"2vh", backgroundColor:"#292929", height:"60vh", width:"90vw", borderColor:"black", borderWidth:"0.3vh", borderRadius:"10vh"}}>
                <h3 className="text-white">Pseudonyme</h3>
                <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="Choisi un pseudo" type="text" name="" id="" />
                <h3 className="text-white">Email</h3>
                <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="exemple@exemple.com" type="email" name="" id="" />
                <h3 className="text-white">Mot de passe</h3>
                <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} type="password" name="" id="" />
                <h3 className="text-white">Mot de passe confirmation</h3>
                <input style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} type="password" name="" id="" />
                <button className="rounded-full" style={{background:"#181818", borderColor:"black", borderWidth:"0.1vh", borderStyle:"solid", height:"3vh", width:"12vh", color:"white"}}>Inscription</button>
            </div>
        </main>
    )
}

