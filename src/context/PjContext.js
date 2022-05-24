import { children, createContext, useState } from "react";

//creo el provider
export const PjContext = createContext();


export const PjProvider = ({children}) => {
    //Los state correspondientes
    const [character1,setCharacter1] = useState([]);
    const [character2,setCharacter2] = useState([]);

    //verificacion de pag
    const seleccionarCharacter = (page,pj) => {
        if(page==="a"){
            setCharacter1(pj) 
        }
        if(page==="b"){
            setCharacter2(pj)
        }
        
       
   }

    //comparto los state en el provider 
    return(
        <PjContext.Provider value={
            {
                character1,
                character2,
                seleccionarCharacter
            }
        }>
            {children}
        </PjContext.Provider>
    )
}