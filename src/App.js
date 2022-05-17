import './App.css';
import {ItemCharacterContainer} from './componentes/itemCharacterContainer/itemCharacterContainer';
import {ItemListEpisodes} from './componentes/ItemListEpisodes/itemListEpisodes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import './App.css'
=======
>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173

function App() {

  return(
   
      <BrowserRouter>
        <ItemCharacterContainer/>
        
        <Routes>
          
<<<<<<< HEAD
          <Route path='/:itemId' element={ <ItemListEpisodes/> } />
          <Route path='/:itemId' element={ <ItemListEpisodes/> } />
        
=======
          <Route path='/:itemId' element={ <ItemListEpisodes/> }/>
          
>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;



//<Route path="/" element={ <ItemCharacterContainer/> }/>
