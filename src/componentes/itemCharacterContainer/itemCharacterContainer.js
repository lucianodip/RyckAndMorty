import {useEffect, useState} from 'react';
import {getPersonajes} from '../../api/personajes.js'
import { ItemList } from '../ItemList/itemList.js';
import './itemCharacterContainer.css'


export const ItemCharacterContainer =() =>  {

  //estados de los personajes de ambas paginas 
  const [personajes1, setPersonajes1] = useState([]);
  const [personajes2, setPersonajes2] = useState([]);
    

 //primer llamado a la api. traera los personajes pag 1 
  useEffect(() => {
    getPersonajes(1).then((data) => setPersonajes1(data.results));
  }, []);

 //segundo llamado a la api. traera los personajes pag 2
  useEffect(() => {
    getPersonajes(2).then((data) => setPersonajes2(data.results));
  }, []);
  
 //enviamos los personajes y la pag al itemList 
  return (
    
    <div className= "containerGeneral">
    <div className="container1">
      
      <ItemList 
        personajes={personajes1}
        page={"a"}
        />
      
    </div>
    <div className="container2">
    <ItemList 
        personajes={personajes2} 
        page={"b"}
    />
    </div>
  </div>
  
  )}

export default ItemCharacterContainer;
