import { animals } from "../data/animals"; 
import "../components/AnimalCardCss.css"; 

interface Animal {
  id: string;
  name: string;
  type: string;
  breed: string;
  image: string;
  description: string;
}

export default function Jadopte() {
  return (
    <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Animaux à adopter</h1>

      <div className="container"> 
        {animals.map((animal: Animal) => (
          <div key={animal.id} className="animal-card">
            <div className="image-container">
              <img
                src={animal.image} 
                alt={animal.name}
                className="animal-image"
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = "/images/background.jpg"; 
                }}
              />
            </div>

            <div className="animal-content">
              {/* CORRECTION : On affiche le nom seul ici, sans l'ID */}
              <h2 className="animal-name">{animal.name}</h2>
              
              <div className="animal-info">
                <p><strong>Espèce :</strong> {animal.type}</p>
                <p><strong>Race :</strong> {animal.breed}</p>
              </div>

              {/* CORRECTION : On ajoute la description ici */}
              <p className="animal-description">{animal.description}</p>
              
              <button className="animal-button">Rencontrer</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}