'use client'
import ModalMessagePrivee from "./mp-client-component"
import { useState } from "react"
import { useEffect } from "react"

export default function HomeMessagePrivee(){
    const [modal, setModal] = useState(false)
    
    
    return (
            <section className="flex flex-col" style={{justifyContent:"center", alignItems:"center", width:"90%"}}>
                {/* <ModalMessagePrivee/> */}
                <h3 style={{color:"white"}}>Message Privée</h3>
                <div className="flex flex-col" style={{justifyContent:"center", alignItems:"center", height:"40vh", width:"100%", backgroundColor:"#292929", color:"white", borderWidth:"0.2vh", borderColor:"black", borderStyle:"solid"}} >
                    <table style={{textAlign:"center", borderColor:"white", borderWidth:"0.2vh", borderStyle:"solid"}}>
                        <thead style={{textAlign:"center", borderColor:"white", borderWidth:"0.2vh", borderStyle:"solid"}}>
                            <tr style={{borderColor:"white", borderWidth:"0.2vh", borderStyle:"solid"}}>
                                <th>Tous les Messages Privee</th>
                            </tr>
                            <tr>
                                <th style={{borderColor:"white", borderWidth:"0.2vh", borderStyle:"solid"}}>Pseudonyme</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody style={{borderColor:"white", borderWidth:"0.2vh", borderStyle:"solid"}}>
                            <tr>
                                <td style={{borderColor:"white", borderWidth:"0.2vh", borderStyle:"solid"}}>Mathieu</td>
                                <td>Salut Mec ça va ?</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <button className="rounded-full" style={{background:"#181818", borderColor:"black", borderWidth:"0.1vh", borderStyle:"solid", height:"3vh", width:"12vh", color:"white"}}>Appliquer</button>
                </div>
            </section>
    )
}