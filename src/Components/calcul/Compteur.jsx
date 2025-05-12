import "./Compteur.css";
function Compteur({ valeur, setValeur }) {
    const diminuer = (e) => {
        e.stopPropagation();
      if (valeur > 1) {
        setValeur(valeur - 1);
      }
    };
  
    const augmenter = (e) => {
        e.stopPropagation();
      setValeur(valeur + 1);
    };
  
    return (
      <div className="compteur">
  <p>Nombre de personnes : </p>
  <div className="controle">
    <button onClick={diminuer}>-</button>
    <span>{valeur}</span>
    <button onClick={augmenter}>+</button>
  </div>
</div>

    );
  }
  
  export default Compteur;
  