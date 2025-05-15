import { useState } from 'react'

import Card from './components/card/Card.jsx';
import Filtre from './components/filtre/Filtre.jsx';
import Compteur from './components/calcul/Compteur.jsx';
import MonContact from './Composants/contact/Contact.jsx';
import MonFooter from './Composants/footer/Footer';
import MonNav from './Composants/nav/Nav.jsx';

const recettes = [
  { 
    titre: "Bowl Mangue",
    image: "/image/bowlMangue.jpeg",
    description: "Un délicieux bowl de mangue",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Courgette", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
      
    ],
    couleur: "#9DCC9D",
    personnes: 4,
  },

  {
    titre: "Bowl Concombre",
    image: "/image/bowlConcombre.jpeg",
    description: "Un délicieux bowl de concombre",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Concombre", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Cerise", quantite: 2}
    ],
    couleur: "#cbaf96",
    personnes:4,
  },

  {
    titre: "Salade Été",
    image: "/image/saladeEte.jpeg",
    description: "Salade fraîche d'été",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "lait", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#bdb8f0",
    personnes:4,
  },

  {
    titre: "Salade Hiver",
    image: "/image/saladeHiver.jpeg",
    description: "Salade hivernale riche",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2} 
    ],
    couleur: "#225542",
    personnes:4,
  },

  {
    titre: "Bowl Potage 1",
    image: "/image/bowlPotage.jpeg",
    description: "Bowl chaud façon potage",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#57caf1",
    personnes:4,
  },

  {
    titre: "Bowl Mille",
    image: "/image/bowlMille.jpeg",
    description: "Bowl aux mille saveurs",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#fa46ee",
    personnes:4,
  },

  {
    titre: "Bowl Potage 2",
    image: "/image/bowlPotage.jpeg",
    description: "Deuxième version du bowl potage",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#fd7f68",
    personnes:4,
  },
 
  {
    titre: "Salade de Fruits",
    image: "/image/saladeFruit.jpeg",
    description: "Un mélange de fruits frais",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#eae10e",
    personnes:4,
  },

  {
    titre: "Tropic Bowl",
    image: "/image/tropic.jpeg",
    description: "Bowl tropical sucré",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#0eea95",
    personnes:4,
  },

  {
    titre: "Délice Fruit 1",
    image: "/image/deliceFruit.jpeg",
    description: "Délice sucré aux fruits 1",
    titre1: "Ingrédients :",
    ingredients: [
      { nom: "Mangue", quantite: 1},
      { nom: "Pomme", quantite: 2},
      { nom: "Poire", quantite: 3},
      { nom: "Banane", quantite: 2}
    ],
    couleur: "#1e1f3e",
    personnes:4,
  },
];

function App() {
  const [filtre, setFiltre] = useState("");
  const [nombrePersonnes, setNombrePersonnes] = useState(4);
  
// Prend ce que l'utilisateur a écrit
// Tout mettre en minuscules pour comparer facilement
// Couper à chaque virgule pour avoir une liste
// Enlever les espaces autour de chaque mot
  const ingredientsExclus = filtre.toLowerCase().split(",").map(el => el.trim());
  
  // On garde seulement les recettes qui ne contiennent pas d'ingrédients interdits
// Pour chaque ingrédient, on regarde s'il n'est PAS dans la liste des ingrédients exclus
  const recettesFiltrees = recettes.filter(recette =>
    recette.ingredients.every(ing =>
      !ingredientsExclus.includes(ing.nom.toLowerCase())
    )
  );

  return (
    <>
    <MonNav/>
    <div className="page">
      {/* Filtre */}
      <Filtre filtre={filtre} setFiltre={setFiltre} />
      {/* Cartes */}
      <main>
        {recettesFiltrees.length > 0 ? (
          recettesFiltrees.map((recette, i) => (
            <Card key={i} {...recette} />
          ))
        ) : (
          <p>Aucune recette trouvée</p>
        )}
      </main>
      <MonContact/>
      <MonFooter/>
    </div>
   
    </>
  );

}

export default App;
    
     

