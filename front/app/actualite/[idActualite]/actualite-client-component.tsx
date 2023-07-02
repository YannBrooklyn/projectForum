export default function ModalAdresseIP(){
    
    return(
        <>
        {/* <script>
            let test = document.getElementById("ModalAdresseIP")
            test.style.display = "block"
        </script> */}
        <div id="divModalAdresseIP" style={{display:"none", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed"}}>
            <div id="ModalAdresseIP" style={{display:"flex", justifyContent:"center", gap:"10vh", alignItems:"center", flexDirection:"column" ,height:"50%", width:"80%", position:"fixed", backgroundColor:"#292929", color:"white"}}>
                <h2>77.88.885.666</h2>
                <p>Voici les autres utilisateur de cette adresse IP</p>
                <table style={{borderColor:"white", borderStyle:"solid", borderWidth:"0.2vh"}}>
                    <thead style={{borderColor:"white", borderStyle:"solid", borderWidth:"0.2vh"}}>
                        <tr>
                            <th style={{borderColor:"white", borderStyle:"solid", borderWidth:"0.2vh"}}>Pseudonyme</th>
                            <th style={{borderColor:"white", borderStyle:"solid", borderWidth:"0.2vh"}}>Date dernière connexion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{borderColor:"white", borderStyle:"solid", borderWidth:"0.2vh"}}>Yann Massoro</td>
                            <td style={{borderColor:"white", borderStyle:"solid", borderWidth:"0.2vh"}}>7 Juin 2023</td>
                        </tr>
                    </tbody>
                </table>
                <button className="rounded-full bg-blue-700 text-white w-5/12" onClick={CloseModalAdresseIP}>Ok</button>
            </div>
        </div>
        </>
    );
}

export function OpenModalAdresseIP() {
    let divModalAdresseIP = document.getElementById("divModalAdresseIP")
    divModalAdresseIP.style.display = "flex"
}

export function CloseModalAdresseIP() {
    let divModalAdresseIP = document.getElementById("divModalAdresseIP")
    divModalAdresseIP.style.display = "none"
}