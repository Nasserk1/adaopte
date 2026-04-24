import { useEffect, useState } from "react";

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
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    // Appel à ton API sur Render
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
        console.error("Erreur :", err);
        setErreur("Impossible de charger les données.");
        setChargement(false);
      });
  }, []);

  return (
    <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2.5rem", color: "#1a1a1a" }}>
        Animaux à adopter
      </h1>

      {chargement && <p style={{ textAlign: "center" }}>Chargement des compagnons...</p>}
      
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
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* LOGIQUE D'IMAGE AMÉLIORÉE */}
            <img
              src={(() => {
                const url = animal.imageurl;
                if (url && url.includes("-unsplash")) {
                  // On découpe par les tirets
                  const parts = url.split('-');
                  // On cherche l'ID juste avant le mot "unsplash"
                  const unsplashIndex = parts.indexOf("unsplash");
                  if (unsplashIndex > 0) {
                    const unsplashId = parts[unsplashIndex - 1];
                    // On ajoute un paramètre de version (v=...) pour forcer le rafraîchissement
                    return `https://images.unsplash.com/photo-${unsplashId}?auto=format&fit=crop&q=80&w=500&v=${animal.id}`;
                  }
                }
                // Si c'est une image perso dans le storage
                return `https://uepaatwuzucozwahlfti.supabase.co/storage/v1/object/public/images/${url?.replace('/images/', '')}`;
              })()}
              alt={animal.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              onError={(e) => { 
                // Image de secours (Chien mignon générique)
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500"; 
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>{animal.name}</h2>
              <div style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                <p style={{ margin: "5px 0" }}><strong>Espèce :</strong> {animal.type}</p>
                <p style={{ margin: "5px 0" }}><strong>Race :</strong> {animal.breed}</p>
                <p style={{ margin: "5px 0" }}><strong>Âge :</strong> {animal.age} ans</p>
                <p style={{ margin: "5px 0" }}><strong>Ville :</strong> {animal.city}</p>
              </div>
              <p style={{ 
                marginTop: "15px", 
                fontSize: "0.95rem", 
                lineHeight: "1.5", 
                color: "#34495e",
                fontStyle: "italic" 
              }}>
                "{animal.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}