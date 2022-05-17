import {useEffect, useState} from 'react';
import {getPersonajes} from '../../api/personajes.js'
import { ItemList } from '../ItemList/itemList.js';
import './itemCharacterContainer.css'


export const ItemCharacterContainer =() =>  {

  const [personajes1, setPersonajes1] = useState([]);
  const [personajes2, setPersonajes2] = useState([]);
    
  useEffect(() => {
    getPersonajes(1).then((data) => setPersonajes1(data.results));
  }, []);

  useEffect(() => {
    getPersonajes(2).then((data) => setPersonajes2(data.results));
  }, []);
  

  return (
    
    <div className= "containerGeneral">
    <div className="container1">
<<<<<<< HEAD
      <ItemList 
        personajes={personajes1}
        
        />
      
    </div>
    <div className="container2">
    <ItemList 
        personajes={personajes2} 
        
    />
=======
      <ItemList personajes={personajes1}/>
      
    </div>
    <div className="container2">
    <ItemList personajes={personajes2}/>
>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173
    </div>
  </div>
  
  )}

export default ItemCharacterContainer;
