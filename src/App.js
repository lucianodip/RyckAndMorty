import './App.css';
import {ItemCharacterContainer} from './componentes/itemCharacterContainer/itemCharacterContainer';
import { BrowserRouter } from 'react-router-dom'
import { EpisodesContainer } from './componentes/episodesContainer/episodesContainer';
import { PjProvider } from './context/PjContext';
import { ItemListEpisodesPage1 } from './componentes/ItemListEpisodesPage1/itemListEpisodesPage1';
import { ItemListEpisodesPage2 } from './componentes/ItemListEpisodesPage2/itemListEpisodesPage2';

function App() {

  return(
    //envuelto en el provider 
   <PjProvider>
      <BrowserRouter>
        <ItemCharacterContainer/>
        <ItemListEpisodesPage1/>
        <ItemListEpisodesPage2/>
      </BrowserRouter>
    </PjProvider>  
   
  );
}

export default App;


