import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Accueil from './Accueil';
import Contactpage from './Contactpage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recettes" element={<App />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
