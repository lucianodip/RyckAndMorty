import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { getEpisodes } from '../../api/episodes';
import { getEpisodesDetail } from '../../api/episodesDetail';
import { PjContext } from '../../context/PjContext';
import './itemListEpisodesPage2.css'

//armado de los container de episodios
export const ItemListEpisodesPage2 = () => {
    
  //creo los state de episodios
  const [episodes, setEpisodes] = useState([]);
  const [episodesDetail, setEpisodesDetail] = useState([]);
  //traigo variable id del context
  const{ character2 }=useContext(PjContext)
  const idEpisodes = [];

 
  //funcion 1 
  //recibe id, pide a la api todos los episodios de que tiene ese id
  //de todos los link va rescatando el numero de episodio y lo guarda en un array
  const pedirEpisodes = (character2) =>{
    getEpisodes(character2).then((data) => 
      {data.episode.map((ep) =>{
        let url = Number(ep.split('/').slice(-1));
        idEpisodes.push(url)
       
      }
      )});
      setEpisodes(idEpisodes);
  }

  //funcion 2
  //con el array con los numeros de episodio solicitamos a la api la documentacion de los mismos
  const pedirEpisodesDetail = (episodes) =>{
    getEpisodesDetail(episodes).then((data) => setEpisodesDetail(data));
    
  }

  //este useEffect renderiza el compenente cada vez que se selecciona un pj
  //ejecuta las funciones 1 y 2 
  useEffect(() => {
    
    pedirEpisodes(character2);
    pedirEpisodesDetail(episodes);
    
  }, [character2]);

  
  //console.log(episodes);
  //console.log(episodesDetail);
  return (
    <div className='episodes2'>
      <h1>Episodios personaje 2:</h1>
    {episodes.map((ep) =>(
       <li key={ep}>{ep}</li>
     ))} 
   </div>
  
  
  );}