'use client'

import ContentActu from "./client-component"




// import { getAllPost } from "@/api/post";
 



export default function Accueil() {
    
    
    return (
        
        <>
            <br/>
            <section style={{width:"90%"}}>
                <div className="flex justify-center text-white" style={{height:"8vh", backgroundColor:'#181818', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                    <h4>Theme</h4>
                </div>
                <div className="text-white" style={{height:"6vh", backgroundColor:'#292929', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                    <a href="/forum/nomCategorie"><h4>Titre Categorie</h4></a>
                </div>
            </section>
        </>
        )
    } 