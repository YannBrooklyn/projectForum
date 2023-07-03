

function TextP() {
    
                
                
    return (
        <a href="/actualite/te">
        <div className="flex flex-col items-center" style={{backgroundColor:"#292929", borderColor:"black", borderWidth:"0.2vh", borderRadius:"5%"}}>
                    <h2 style={{fontSize:"2vh", fontWeight:"bold", color:"white"}}>Le titre</h2>
                    <div className="flex flex-col gap-5">
                        <div className="flex">
                        <img src="/image/default/profil.jpg" alt="test" style={{borderRadius:"100%", height:"8vh", width:"8vh"}} />
                        <h5 style={{fontWeight:"bold", color:"white"}}>Yann Massoro</h5>
                        
                        <h6 style={{fontWeight:"lighter", color:"white"}}>25 Juin 2023</h6>
                        </div>
                        
                        
                        <p style={{width:"80%", textAlign:"justify", color:"white"}}  id="textP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin eros non egestas faucibus. Nunc vitae ultricies elit, vel venenatis arcu. Curabitur suscipit libero a quam mattis, ac faucibus urna varius. Aliquam et sem at arcu condimentum laoreet. Sed eros ipsum, semper id justo sit amet, consectetur mollis massa. Quisque hendrerit, dolor sed ultrices sodales, felis velit rhoncus arcu, at bibendum augue lorem eu elit. Maecenas sollicitudin commodo odio, non mattis velit venenatis quis. Praesent imperdiet quam eu augue lacinia varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tincidunt in nisl et suscipit. In dictum feugiat porta. Nullam quis leo eget elit ornare finibus consectetur aliquet velit. Duis a accumsan felis. Vivamus sit amet egestas libero, eu varius elit.
                            Aenean interdum, ipsum eu sodales sagittis, lectus dolor imperdiet nunc, sit amet volutpat nisi dui quis sem. Donec nec vulputate sem. Maecenas maximus vitae erat eget pulvinar. Suspendisse mauris tellus, fringilla et risus viverra, feugiat commodo metus. Donec consequat augue at nisl pretium hendrerit. Phasellus luctus volutpat quam, sed lacinia purus fermentum sed. Quisque non tristique augue. Morbi vestibulum at elit quis mollis.</p>
                            
    
                        </div>
                </div>
        </a>
        );
}


export default function Accueil() {
    
    
    return (
        
        <main className=" flex flex-col items-center w-12/12">
            <h2 className="text-white" style={{fontSize:"3vh"}}>Accueil : Actualité</h2>
            <section className="w-11/12">
                
                <TextP/>
                
            </section>
        </main>
        )
    } 