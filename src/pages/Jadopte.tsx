import { useEffect, useState } from "react";

interface Animal {
  id: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  imageurl: string; // Doit contenir "/images/nom-du-fichier.jpg" dans Supabase
  breed: string;
  type: string;
  shelter: string;
  city: string;
}

export default function Jadopte() {
  const [animaux, setAnimaux] = useState<Animal[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://adaopte-api.onrender.com/animaux")
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur serveur (${res.status})`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setAnimaux(data);
        }
        setChargement(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement :", err);
        setErreur("Impossible de récupérer les animaux.");
        setChargement(false);
      });
  }, []);

  return (
    <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Animaux à adopter</h1>

      {chargement && <p style={{ textAlign: "center" }}>Chargement en cours...</p>}
      {erreur && <p style={{ color: "red", textAlign: "center" }}>{erreur}</p>}

      <div className="cards" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "30px" 
      }}>
        {animaux.map((animal) => (
          <div key={animal.id} className="card" style={{ 
            borderRadius: "15px", 
            overflow: "hidden", 
            boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
            backgroundColor: "#fff"
          }}>
            {/* L'URL dans Supabase doit être exactement le chemin depuis le dossier public */}
            {/* Exemple : /images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg */}
            <img
              src={animal.imageurl} 
              alt={animal.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              onError={(e) => { 
                // Si l'image n'est pas trouvée (faute de frappe dans Supabase par ex)
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x250?text=Image+non+trouvée"; 
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2 style={{ margin: "0 0 10px 0" }}>{animal.name}</h2>
              <p style={{ margin: "5px 0" }}><strong>Espèce :</strong> {animal.type}</p>
              <p style={{ margin: "5px 0" }}><strong>Race :</strong> {animal.breed}</p>
              <p style={{ margin: "5px 0" }}><strong>Ville :</strong> {animal.city}</p>
              <p style={{ marginTop: "15px", fontSize: "0.9rem", color: "#555" }}>
                {animal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}