import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEpisodes } from '../../api/episodes';
<<<<<<< HEAD
import { getEpisodesDetail } from '../../api/episodesDetail';
=======

>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173
import './itemListEpisodes.css'


export const ItemListEpisodes = () => {
    
    const [episodes, setEpisodes] = useState([]);
<<<<<<< HEAD
    const [episodesDetail, setEpisodesDetail] = useState([]);
    const {itemId} = useParams();
    const idEpisodes = [];

    const convertor = (url) =>{
      let urlP = Number(url.split('/').slice(-1));
      
      return urlP;
    }

    const pedirEpisodes = (itemId) =>{
      getEpisodes(itemId).then((data) => 
        {data.episode.map((ep) =>{
          let url = convertor(ep);
          idEpisodes.push(url)
          setEpisodes(idEpisodes);
        }
        )});
    }

    const pedirEpisodesDetail = (episodes) =>{
      getEpisodesDetail(episodes).then((data) => setEpisodesDetail(data));
      
    }

    
    useEffect(() => {
      
      pedirEpisodes(itemId);
      pedirEpisodesDetail(episodes);
      
    }, [itemId]);

    return (
        <div className='episodes'>
          <li>{episodesDetail.name}</li>
=======
    const {itemId} = useParams();

    
    
    useEffect(() => {
      getEpisodes(itemId).then((data) => setEpisodes(data));
    }, [itemId]);

    

    return (
        <div>
           {episodes.episode.map((ep) =>{
            return <li>{ep}</li>;
         })}

>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173
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
<<<<<<< HEAD
        })} 
      
       /*  {episodes.map((ep) =>{
          return <li>{ep}</li>;
       })}*/

      
      
      
      }
=======
        })} */}
>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173
