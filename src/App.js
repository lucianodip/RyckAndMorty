import './App.css';
import {ItemCharacterContainer} from './componentes/itemCharacterContainer/itemCharacterContainer';
import {ItemListEpisodes} from './componentes/ItemListEpisodes/itemListEpisodes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return(
   
      <BrowserRouter>
        <ItemCharacterContainer/>
        
        <Routes>
          
          <Route path='/:itemId' element={ <ItemListEpisodes/> }/>
          
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;



//<Route path="/" element={ <ItemCharacterContainer/> }/>
