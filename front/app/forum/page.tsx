export default function Forum() {
    return(
        <main className="flex flex-col items-center justify-center">
            <Shoutbox/>
            <br/>
            <section style={{width:"90%"}}>
                <div className="flex justify-center text-white" style={{height:"8vh", backgroundColor:'#181818', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                    <h4>Theme</h4>
                </div>
                <div className="text-white" style={{height:"6vh", backgroundColor:'#292929', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                    <a href="/forum/nomCategorie"><h4>Titre Categorie</h4></a>
                </div>
            </section>
        </main>

    )
}


export function Shoutbox() {
    return(
        <section style={{width:"90%", height:"35vh", backgroundColor:"black"}}>
            <div className="flex justify-between">

                <input style={{width:"80%"}} type="text" name="" id="" />
                <input style={{width:"15%", backgroundColor:"grey", color:"white"}}type="button" value="Envoyer" />
            </div>
            <div style={{width:"100%"}}>

            </div>
        </section>
    )
}