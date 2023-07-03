export default function Categorie() {
    return (
    <main className="flex flex-col items-center justify-center">
        <AutreCategorie/>
        <br/>
        <section style={{width:"90%"}}>
            <div className="flex justify-center text-white" style={{height:"8vh", backgroundColor:'#181818', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                <h4>Topics</h4>
            </div>
            <div className="text-white" style={{height:"6vh", backgroundColor:'#292929', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                <a href="/forum/nomCategorie/topic/idTopic"><h4>Titre Topic</h4></a>
            </div>
        </section>
    </main>
    );
}


export function AutreCategorie() {
    return (
        <section style={{width:"90%"}}>
            <div className="flex justify-center text-white" style={{height:"8vh", backgroundColor:'#181818', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                <h4>Autre Categorie</h4>
            </div>
            <div className="text-white" style={{height:"6vh", backgroundColor:'#292929', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                <a href="/forum/nomCategorie/nomSousCategorie/"><h4>Sous Categorie</h4></a>
            </div>
        </section>
    );
}