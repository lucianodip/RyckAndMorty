import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PjContext } from '../../context/PjContext'
import './cardPersonajes.css'

export const CardPersonajes = ( {id, nombre, status, species,img, page} ) => {   
    

    //bajo la funcion seleccion del context
    const {seleccionarCharacter} = useContext(PjContext);

    //funcion que ejecuta la funcion enviandole al context la pag y el id del pj seleccionado
    const onAdd = ({page,id}) => {
        seleccionarCharacter(page,id)
    }
    
    //armado de la card
    return (
        <div className="card" onClick={() =>onAdd({page,id})}>
            <img className="img" src={img} alt="Personaje"/>
            <div className="container">
                <h4><b>{nombre}</b></h4> 
                <p>{status} - {species}</p> 
            </div>
        </div>
        
        
    )
}
