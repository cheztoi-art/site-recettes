import MonNav from "./Composants/nav/Nav.jsx";
import MonFooter from "./Composants/footer/Footer.jsx";

import './Accueil.css';

function Accueil() {
  return (
    <>
        <MonNav />
        <div className='accueilbloc'>
            <img src="/image/bowlConcombre.jpeg" alt="#" className='accueilpic'/>
            <div className='accueilbloctxt'>
             <h1 className='accueiltitre'>Présentation</h1>
             <p className='accueiltxt'> Officiis sunt vel explicabo, iureipsam voluptate sit natus corporis quisquam, quaerat ducimus quia aut nihil quae quam ullam doloremque neque? Illo, labore nobis. Eligendi commodi amet quo dolores labore!
            </p>
            </div>
        </div>
        <MonFooter />
    </>
  );
}

export default Accueil;