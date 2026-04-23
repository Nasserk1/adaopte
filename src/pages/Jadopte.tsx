import { useEffect, useState } from "react";

// Définition du type Animal
interface Animal {
  id: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  imageurl: string;
  size: string;
  good_with_kids: boolean;
  good_with_animals: boolean;
  arrival_date: string;
  breed: string;
  type: string;
  shelter: string;
  address: string;
  city: string;
  zip_code: string;
  phone: string;
  email: string;
  vaccinated: boolean | null;
  sterilized: boolean | null;
  microchipped: boolean | null;
  last_checkup: string | null;
  medical_notes: string | null;
}

export default function Jadopte() {
  const [animaux, setAnimaux] = useState<Animal[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    setChargement(true);
    fetch("https://adaopte-api.onrender.com/animaux")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur serveur (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Données reçues :", data);
        // On vérifie que data est bien un tableau avant de faire le set
        if (Array.isArray(data)) {
          setAnimaux(data);
        } else {
          console.error("Les données reçues ne sont pas un tableau :", data);
          setAnimaux([]);
        }
        setChargement(false);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setErreur("Impossible de charger les animaux. Vérifiez la connexion au serveur.");
        setChargement(false);
      });
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Animaux à adopter</h1>

      {/* Affichage pendant le chargement */}
      {chargement && <p>Chargement des animaux en cours...</p>}

      {/* Affichage en cas d'erreur API */}
      {erreur && (
        <div style={{ color: "red", padding: "10px", border: "1px solid red", marginBottom: "20px" }}>
          {erreur}
        </div>
      )}

      {/* Liste des animaux */}
      <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {!chargement && animaux.length > 0 ? (
          animaux.map((animal) => (
            <div key={animal.id} className="card" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px" }}>
              {/* IMAGE */}
              <img
                src={animal.imageurl}
                alt={animal.name}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}
                onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Image+non+disponible"; }}
              />

              <h2>{animal.name}</h2>
              <p><strong>Espèce :</strong> {animal.type}</p>
              <p><strong>Race :</strong> {animal.breed}</p>
              <p><strong>Âge :</strong> {animal.age} ans</p>
              <p><strong>Ville :</strong> {animal.city}</p>
              <p><strong>Refuge :</strong> {animal.shelter}</p>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>{animal.description}</p>
            </div>
          ))
        ) : (
          !chargement && !erreur && <p>Aucun animal disponible pour le moment.</p>
        )}
      </div>
    </main>
  );
}