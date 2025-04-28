import { useState } from 'react';
import MonFooter from './Composants/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MonFooter/>
    </>
  );
}

export default App;