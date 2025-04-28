import "./Filtre.css";

function Filtre({ filtre, setFiltre }) {
  return (
    <div className="filtre">
      <input
        type="text"
        placeholder="Ingrédients à exclure"
        value={filtre}
        onChange={(e) => setFiltre(e.target.value)}
      />
    </div>
  );
}

export default Filtre;
