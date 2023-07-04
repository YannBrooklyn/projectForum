export default function Inscription() {
    return (
        <main className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center" style={{gap:"2vh", backgroundColor:"#292929", height:"60vh", width:"90vw", borderColor:"black", borderWidth:"0.3vh", borderRadius:"10vh"}}>
                <h3 className="text-white">Pseudonyme</h3>
                <input type="text" name="" id="" />
                <h3 className="text-white">Email</h3>
                <input type="password" name="" id="" />
                <h3 className="text-white">Mot de passe</h3>
                <input type="password" name="" id="" />
                <h3 className="text-white">Mot de passe confirmation</h3>
                <input type="password" name="" id="" />
                <button style={{backgroundColor:"#181818", borderRadius:"5vh", borderColor:"black", height:"5vh", width:"20vw", borderWidth:"0.5vw", color:"white"}}>Connexion</button>
            </div>
        </main>
    )
}