// On importe les styles de la carte depuis le fichier CSS
import "./Card.css";

// On importe useState de React pour gérer l'état ouvert/fermé de la carte
import { useState } from "react";
import Compteur from "../calcul/Compteur";

// On crée le composant Card
// Il reçoit des infos (props) : image, titre, description, liste d'ingrédients, couleur de fond...
function Card({ image, titre, titre1, description, ingredients, couleur,personnes,valeur,setValeur }) {

  // On crée une variable "isOpen" pour savoir si la carte est ouverte ou non
  // false = fermée au départ
  const [isOpen, setIsOpen] = useState(false);
  const [nombrePersonnes, setNombrePersonnes] = useState(personnes);


  // Fonction appelée quand on clique sur la carte : elle inverse l’état (ouvrir ⇄ fermer)
  const toggleCard = () => {
    setIsOpen(!isOpen);
  }

  // Ce que le composant affiche à l'écran
  return (
    // La carte principale : elle réagit au clic avec la fonction toggleCard
    <div className="card-container" onClick={toggleCard}>

      {/* L’image de fond de la carte : elle reste toujours visible */}
      <img src={image} alt={titre} className="card-background" />
      
      {/* Bloc avec tout le texte par-dessus l’image */}
      {/* Si isOpen est true, on ajoute la classe CSS "slide-out" qui la fait glisser */}
      {/* Si aucune couleur n’est donnée, on applique un vert par défaut */}
      <div className={`card-content ${isOpen ? "slide-out" : ""}`} style={{ background: couleur || "#9DCC9D" }}>
        
        {/* Titre de la recette */}
        <h1 className="titre">{titre}</h1>
       

        {/* Petite phrase descriptive */}
        <p>{description}</p>

        {/* Sous-titre (ex : "Ingrédients :") */}
        <h2 className="titre1">{titre1}</h2>

        <div className="personnes-compteur">
          
        <p>Pour {nombrePersonnes} personnes</p>
        <Compteur valeur={nombrePersonnes} setValeur={setNombrePersonnes}/>
        </div>

        {/* Liste des ingrédients fournie dans un tableau */}
        <ul>
          {ingredients.map((ingredient, index) => {
            const facteur = nombrePersonnes / personnes;
            return (
              <li key={index}>
                {Math.round(ingredient.quantite * facteur)} {ingredient.nom}
              </li>
            );
          })}
        </ul>



      </div>
    </div>
  );
}

// On rend le composant disponible pour être utilisé ailleurs dans le projet
export default Card;
