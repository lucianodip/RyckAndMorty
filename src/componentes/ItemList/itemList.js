import {Contenedor} from '../contenedor/Contenedor'
import {CardPersonajes} from '../cardPersonajes/cardPersonajes'
import './itemList.css'

//recibi los datos, desestructuro en las card
export const ItemList = ({personajes, page}) => {
    
    return (
        <Contenedor>
        <div className="itemList">
            {personajes.map((pj) => 
                <CardPersonajes 
                    key={pj.id}
                    id={pj.id}
                    nombre={pj.name}
                    img={pj.image}
                    status={pj.status}
                    species={pj.species}
                    page={page}
                      
                />
            )}
        </div>
        </Contenedor>
    )
}
