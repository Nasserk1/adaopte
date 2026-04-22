import { useEffect, useState } from "react";

export default function Jadopte() {
  const [animaux, setAnimaux] = useState([]);

  useEffect(() => {
    fetch("https://adaopte-api.onrender.com/animaux")
      .then(res => res.json())
      .then(data => {
        console.log("Données reçues :", data);
        setAnimaux(data);
      })
      .catch(err => console.error("Erreur API :", err));
  }, []);

  return (
    <main>
      <h1>Animaux à adopter</h1>

      <div className="cards">
        {animaux.map(animal => (
          <div key={animal.id} className="card">
            <h2>{animal.nom}</h2>
            <p>Espèce : {animal.espece}</p>
            <p>Âge : {animal.age}</p>
            <p>{animal.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
