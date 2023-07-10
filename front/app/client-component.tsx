import { useState } from "react"

import { useEffect } from "react"
import { getAllActu} from "@/api/post"
import { newActu } from "@/api/post";

// export  function newActu({ setActus, actus}){
//     const [show, setShow] = useState(false);
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
    
//     const handleShow = () => setShow(true);
//     const handleClose = () => setShow(false);

//     const handleCreatePost = async (evenement) =>{
//         evenement.preventDefault();
//         const data = {
//             "title" : title,
//             "description": description
//         }
//         await newActu(data)
//         .then((actu)=> {
//             setActus([...actus, actu])
//             handleClose();
//             setDescription('');
//             setTitle('');
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }

    

//     return(

//     )
// }

export const ActuCard = ({ actuData: {}, setActus, actus}) => {
    return (
        <>
        <p>{actuData.title}</p>
        <p>{actuData.description}</p>
        </>
    )
}


export default function ContentActu() {
    
    const [actualite, setActualite] = useState([])
    
    
    useEffect(()=> {
        getAllActu()
        .then((actualite) => {
            setActualite(actualite);
            console.log("eeeeeee",actualite)
        })
        .catch((error)=>{
            console.log("coucouer ", error)
        })
    }, [])
                        
    console.log("salut" + actualite)
    return (
        <>
        <a href="/actualite/te">
            <div className="flex flex-col items-center" style={{backgroundColor:"#292929", borderColor:"black", borderWidth:"0.2vh", borderRadius:"5%"}}>
                <h2 style={{fontSize:"2vh", fontWeight:"bold", color:"white"}}>Le titre</h2>
                <div className="flex flex-col gap-5">
                    <div className="flex">
                        <img src="/image/default/profil.jpg" alt="test" style={{borderRadius:"100%", height:"8vh", width:"8vh"}} />
                        <h5 style={{fontWeight:"bold", color:"white"}}>Yann Massoro</h5>
                        <p>{actualite}</p>
                        {actualite.length > 0 ?
                        actualite.map((actu) => {
                            console.log("actu" ,actu)
                            return(
                                <p key={actu.idActualite}>{actu.textActualite}      </p>
                            )
                        }): null
                    }
                        
                        <h6 style={{fontWeight:"lighter", color:"white"}}>25 Juin 2023</h6>
                    </div>
                    

                    
                    
                </div>
            </div>
        </a>
        </>
        );
    }


export function OpenMenuBurgerLogout(){
    let myNavBurger = document.getElementById("navBurger")
    myNavBurger.style.display = "flex"
    
}

export function CloseMenuBurgerLogout(){
    let myNavBurger = document.getElementById("navBurger")
    myNavBurger.style.display = "none"
    
}



// export function OpenMenuBurgerLoged(){
//     let navBurger = document.getElementById("navBurgerLog")
//     navBurger.style.display = "flex"
//     let iconeNavBurger = document.getElementById("iconeNavBurger")
//     iconeNavBurger.style.position = "static"
// }

// export function CloseMenuBurgerLoged(){
//     let navBurger = document.getElementById("navBurgerLog")
//     navBurger.style.display = "none"
//     let iconeNavBurger = document.getElementById("iconeNavBurger")
//     iconeNavBurger.style.position = "absolute"
// }