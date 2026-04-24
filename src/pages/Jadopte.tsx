import { useEffect, useState } from "react";

// Définition du type Animal pour TypeScript
interface Animal {
  id: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  imageurl: string;
  breed: string;
  type: string;
  shelter: string;
  city: string;
}

export default function Jadopte() {
  const [animaux, setAnimaux] = useState<Animal[]>([]);
  // On laisse chargement à true par défaut
  const [chargement, setChargement] = useState(true); 
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    // Note : On ne rappelle pas setChargement(true) ici pour éviter les rendus inutiles
    fetch("https://adaopte-api.onrender.com/animaux")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur serveur (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setAnimaux(data);
        } else {
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
    <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Animaux à adopter</h1>

      {/* Affichage pendant le chargement */}
      {chargement && <p style={{ textAlign: "center" }}>Chargement des animaux en cours...</p>}

      {/* Affichage en cas d'erreur API */}
      {erreur && (
        <div style={{ color: "red", padding: "15px", border: "1px solid red", borderRadius: "8px", marginBottom: "20px", textAlign: "center" }}>
          {erreur}
        </div>
      )}

      {/* Grille des animaux */}
      <div className="cards" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: "25px" 
      }}>
        {!chargement && animaux.length > 0 ? (
          animaux.map((animal) => (
            <div key={animal.id} className="card" style={{ 
              border: "1px solid #eee", 
              borderRadius: "12px", 
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#fff"
            }}>
              {/* LOGIQUE D'AFFICHAGE DE L'IMAGE */}
              <img
                src={(() => {
                  if (animal.imageurl && animal.imageurl.includes("-unsplash")) {
                    const parts = animal.imageurl.split('-');
                    const unsplashId = parts[1]; 
                    // Remplace la ligne du return Unsplash par celle-ci :
                  return `https://images.unsplash.com/photo-${unsplashId}?auto=format&fit=crop&q=80&w=500&sig=${Math.random()}`;
                  } 
                  return `https://uepaatwuzucozwahlfti.supabase.co/storage/v1/object/public/images/${animal.imageurl?.replace('/images/', '')}`;
                })()}
                alt={animal.name}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500"; 
                }}
              />

              <div style={{ padding: "20px" }}>
                <h2 style={{ marginTop: "0", color: "#333" }}>{animal.name}</h2>
                <p style={{ margin: "5px 0" }}><strong>Espèce :</strong> {animal.type}</p>
                <p style={{ margin: "5px 0" }}><strong>Race :</strong> {animal.breed}</p>
                <p style={{ margin: "5px 0" }}><strong>Âge :</strong> {animal.age} ans</p>
                <p style={{ margin: "5px 0" }}><strong>Ville :</strong> {animal.city}</p>
                <p style={{ margin: "5px 0" }}><strong>Refuge :</strong> {animal.shelter}</p>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.4", marginTop: "15px" }}>
                  {animal.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          !chargement && !erreur && <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>Aucun animal disponible pour le moment.</p>
        )}
      </div>
    </main>
  );
}