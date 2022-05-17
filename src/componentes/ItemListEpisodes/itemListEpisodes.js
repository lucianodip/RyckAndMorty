import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEpisodes } from '../../api/episodes';

import './itemListEpisodes.css'


export const ItemListEpisodes = () => {
    
    const [episodes, setEpisodes] = useState([]);
    const {itemId} = useParams();

    
    
    useEffect(() => {
      getEpisodes(itemId).then((data) => setEpisodes(data));
    }, [itemId]);

    

    return (
        <div>
           {episodes.episode.map((ep) =>{
            return <li>{ep}</li>;
         })}

        </div>
    
    
    );}


{/* <div className="episodes">
        
        </div> */}
  //         {episodes.map((pj) => (
    //             <li>{pj.name}</li>
    //         ))}




    // <div>
    //        {episodes.name.map((ep) =>{
    //           <h1>{ep}</h1>
    //        })}
    //     </div>


    // <div>
    // {episodes.episode.map((ep) =>{
    // return <li>{ep}</li>;
    // })}
    // </div>

     {/* {episodes.episode.map((ep) =>{
        return <li>{ep}</li>;
        })} */}