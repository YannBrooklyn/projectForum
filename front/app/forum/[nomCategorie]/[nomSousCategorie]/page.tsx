export default function SousCategorie() {
    return (
    <main className="flex flex-col items-center justify-center">
        <section style={{width:"90%"}}>
            <div className="flex justify-center text-white" style={{height:"8vh", backgroundColor:'#181818', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                <h4>Topics</h4>
            </div>
            <div className="text-white" style={{height:"6vh", backgroundColor:'#292929', width:"100%", borderStyle:"solid", borderWidth:"0.2vh", borderColor:"black"}}>
                <a href="/forum/nomCategorie/idTopic"><h4>Titre Topic</h4></a>
            </div>
        </section>
    </main>
    );
}