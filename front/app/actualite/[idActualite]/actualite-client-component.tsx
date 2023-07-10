import { Button } from "@material-tailwind/react";

export default function TheModals(){
    
    return(
        <>
        
        <div id="divModalAdresseIP" style={{display:"none", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed", top:"0"}}>
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
                
                <button className="rounded-full" style={{color:"white", backgroundColor:"#3D8AFF", height:"3vh", width:"12vh"}} onClick={CloseModalAdresseIP}>Ok</button>
            </div>
        </div>

        {/* ModalEditer */}

        <div id="divModalEditer" style={{display:"none", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed", top:"0"}}>
            <div id="ModalEditer" style={{display:"flex", justifyContent:"center", gap:"10vh", alignItems:"center", flexDirection:"column" ,height:"50%", width:"80%", position:"fixed", backgroundColor:"#292929", color:"white"}}>
                <h2>Edition du texte</h2>
                
                <textarea name="" id="textareaModalEditer" cols="30" rows="10" placeholder="Ecrivez votre texte..."></textarea>
                <button className="rounded-full" style={{color:"white", backgroundColor:"#3D8AFF", height:"3vh", width:"12vh"}} onClick={CloseModalEditer}>Editer</button>
            </div>
        </div>

        {/* ModalSupprimer */}

        <div id="divModalSupprimer" style={{display:"none", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed", top:"0"}}>
            <div id="ModalSupprimer" style={{display:"flex", justifyContent:"center", gap:"10vh", alignItems:"center", flexDirection:"column" ,height:"50%", width:"80%", position:"fixed", backgroundColor:"#292929", color:"white"}}>
                <h2>Supprimer ce commentaire ?</h2>
                
                <button className="rounded-full" style={{color:"white", backgroundColor:"#A90000", height:"3vh", width:"12vh"}} onClick={CloseModalSupprimer}>Supprimer</button>
            </div>
        </div>

        {/* ModalBannir */}

        <div id="divModalBannir" style={{display:"none", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed", top:"0"}}>
            <div id="ModalBannir" style={{display:"flex", justifyContent:"center", gap:"10vh", alignItems:"center", flexDirection:"column" ,height:"50%", width:"80%", position:"fixed", backgroundColor:"#292929", color:"white"}}>
            <h2>Voulez vous bannir cette utilisateur ? ?</h2>
            <input type="radio" name="bannir" id="banIP" value="test" style={{color:"white"}}/>
                <label htmlFor="banIP">Bannir l'adresse IP</label>
            <input type="radio" name="bannir" id="banCompte"/>
                <label htmlFor="banCompte">Bannir le compte</label>
            <input type="date" />
            <button className="rounded-full" style={{color:"white", backgroundColor:"#A90000", height:"3vh", width:"12vh"}} onClick={CloseModalBannir}>Bannir</button>
            </div>
        </div>

        {/* ModalSignaler */}

        <div id="divModalSignaler" style={{display:"none", justifyContent:"center", alignItems:"center",height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.598)", position:"fixed", top:"0"}}>
            <div id="ModalSignaler" style={{display:"flex", justifyContent:"center", gap:"10vh", alignItems:"center", flexDirection:"column" ,height:"50%", width:"80%", position:"fixed", backgroundColor:"#292929", color:"white"}}>
            <h2>Voulez vous vraiment signaler cette utilisateur ?</h2>
                
                <button className="rounded-full" style={{color:"white", backgroundColor:"#A90000", height:"3vh", width:"12vh"}} onClick={CloseModalSignaler}>Signaler</button>
            </div>
        </div>
        </>
    );
}




// Open&Close ModalAdresseIP

export function OpenModalAdresseIP() {
    let divModalAdresseIP = document.getElementById("divModalAdresseIP")
    divModalAdresseIP.style.display = "flex"
}

export function CloseModalAdresseIP() {
    let divModalAdresseIP = document.getElementById("divModalAdresseIP")
    divModalAdresseIP.style.display = "none"
}

// Open&Close ModalEditer

export function OpenModalEditer() {
    let divModalEditer = document.getElementById("divModalEditer")
    divModalEditer.style.display = "flex"
}

export function CloseModalEditer() {
    let divModalEditer = document.getElementById("divModalEditer")
    divModalEditer.style.display = "none"
}

// Open&Close ModalSignaler

export function OpenModalSignaler() {
    let divModalSignaler = document.getElementById("divModalSignaler")
    divModalSignaler.style.display = "flex"
}

export function CloseModalSignaler() {
    let divModalSignaler = document.getElementById("divModalSignaler")
    divModalSignaler.style.display = "none"
}

// Open&Close ModalSupprimer

export function OpenModalSupprimer() {
    let divModalSupprimer = document.getElementById("divModalSupprimer")
    divModalSupprimer.style.display = "flex"
}

export function CloseModalSupprimer() {
    let divModalSupprimer = document.getElementById("divModalSupprimer")
    divModalSupprimer.style.display = "none"
}

// Open&Close ModalSupprimer

export function OpenModalBannir() {
    let divModalBannir = document.getElementById("divModalBannir")
    divModalBannir.style.display = "flex"
}

export function CloseModalBannir() {
    let divModalBannir = document.getElementById("divModalBannir")
    divModalBannir.style.display = "none"
}