'use client'
import TheModals from "./topic-client-component";
import { OpenModalAdresseIP } from "./topic-client-component";
import { OpenModalBannir } from "./topic-client-component";
import { OpenModalEditer } from "./topic-client-component";
import { OpenModalSignaler } from "./topic-client-component";
import { OpenModalSupprimer } from "./topic-client-component";

export default function Topic(){
    return (
        <main className="flex flex-col justify-center items-center">
            <h2 className="text-white">Titre du Topic</h2>
            <section style={{width: "90%", backgroundColor:"#292929", color:"white"}}>
                <TheModals/>
                <ButtonModals/>
                <div className="flex justify-center items-center" style={{gap:"1vh", borderWidth:"0.2vh", borderColor:"black", height:"45vh"}} >
                    
                    <div className="flex flex-col" style={{backgroundColor:"#181818", borderColor:"black", borderWidth:"0.2vh", height:"25vh"}}>
                        <img style={{height:"50vh", width:'50vh'}} src="/image/default/profil.jpg" alt=""/>
                        <h4>Yann Massoro</h4>
                        <h4>Administrateur</h4>
                        <h5>Posts: 8811</h5>
                        <h5>Likes: 455</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto, magnam aut voluptatibus suscipit quisquam aliquam voluptas eius veritatis nam vel, consequuntur, optio alias fuga labore nemo ipsa non tempore?</p>
                </div>
                <hr/>
                <Commentaire/>
            </section>
        </main>
    );
}

export function Commentaire() {
    return (
        <>
        <ButtonModals/>
            <div className="flex justify-center items-center" style={{gap:"1vh", borderWidth:"0.2vh", borderColor:"black", height:"45vh"}} >
                
                <div className="flex flex-col" style={{backgroundColor:"#181818", borderColor:"black", borderWidth:"0.2vh", height:"25vh"}}>
                    <img style={{height:"50vh", width:'50vh'}} src="/image/default/profil.jpg" alt=""/>
                    <h4>Yann Massoro</h4>
                    <h4>Administrateur</h4>
                    <h5>Posts: 8811</h5>
                    <h5>Likes: 455</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto, magnam aut voluptatibus suscipit quisquam aliquam voluptas eius veritatis nam vel, consequuntur, optio alias fuga labore nemo ipsa non tempore?</p>
            </div>
            <hr/>
        </>
    );
}

export function ButtonModals() {
    return (
        <div>
            <button onClick={OpenModalAdresseIP}>
                <img src="" className="text-white" alt="adresse IP" />
            </button>
            <button onClick={OpenModalEditer}>
                <img src="" className="text-white" alt="Editer" />
            </button>
            <button onClick={OpenModalSignaler}>
                <img src="" className="text-white" alt="Signaler" />
            </button>
            <button onClick={OpenModalSupprimer}>
                <img src="" className="text-white" alt="Supprimer" />
            </button>
            <button onClick={OpenModalBannir}>
                <img src="" className="text-white" alt="Bannir" />
            </button>
        </div>
    );
}