import {Contenedor} from '../contenedor/Contenedor'
import {CardPersonajes} from '../cardPersonajes/cardPersonajes'
import {ItemListEpisodes} from '../ItemListEpisodes/itemListEpisodes'
import './itemList.css'


export const ItemList = ({personajes}) => {
    
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
                    
                      
                />
            )}
        </div>
        </Contenedor>
    )
}

//onClick={() => getEpisodes(pj.id)}




{/* <div>
                {personajes.map((el) => <cardPersonajes key={el.id}{...el}/>)}
            </div> */}



        //     <ul>
        //     {personajes.map((character) => (
        //         <li key={character.id}>id:{character.id}{character.name}{character.species}{character.image}</li>
        //     ))}
        // </ul>