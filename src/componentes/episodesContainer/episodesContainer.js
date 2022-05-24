import React from 'react'
import { useParams } from 'react-router';
import { ItemListEpisodesPage1 } from '../ItemListEpisodesPage1/itemListEpisodesPage1';
import { ItemListEpisodesPage2 } from '../ItemListEpisodesPage2/itemListEpisodesPage2';

export const EpisodesContainer = () => {

    // const {itemId1} = useParams();
    // const {itemId2} = useParams();

    return (
        <div className='episodesContainer'>
            <div ><ItemListEpisodesPage1 /></div>
            <div ><ItemListEpisodesPage2 /></div>
        </div>
    )
}
