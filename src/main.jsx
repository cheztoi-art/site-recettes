import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import Accueil from '../Accueil';
import Contactpage from '../Contactpage';

createRoot(document.getElementById('root')).render(
  //Cette ligne crée une racine React pour ton application
  <StrictMode>
    <Contactpage />
  </StrictMode>,
)

export default App;