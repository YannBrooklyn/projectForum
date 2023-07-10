export default function Connexion() {
    return (
            <div className="flex flex-col justify-center items-center" style={{gap:"2vh", backgroundColor:"#292929", height:"60vh", width:"90vw", borderColor:"black", borderWidth:"0.3vh", borderRadius:"10vh"}}>
                <h3 className="text-white">Email</h3>
                <input type="text" style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="exemple@exemple.com" name="" id="" />
                <h3 className="text-white">Mot de passe</h3>
                <input type="password" style={{backgroundColor:"#181818", color:"white", height:"3vh", width:"25vh"}} placeholder="Mot de Passe" name="" id="" />
                <button className="rounded-full" style={{background:"#181818", borderColor:"black", borderWidth:"0.1vh", borderStyle:"solid", height:"3vh", width:"12vh", color:"white"}}>Connexion</button>
            </div>
   
    )
}