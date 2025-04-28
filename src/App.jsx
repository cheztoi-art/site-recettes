import { useState } from 'react';
import MonNav from './Composants/nav/Nav';
import MonSousTitres from './Composants/sous-titres/SousTitres';
import MonContact from './Composants/contact/Contact';
import MonFooter from './Composants/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MonNav/>
      <MonSousTitres/>
      <MonContact/>
      <MonFooter/>
    </>
  );
}

export default App;