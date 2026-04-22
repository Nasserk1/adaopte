import { useEffect, useState } from "react";

// Définition du type Animal (correspond exactement à ton backend Render)
interface Animal {
  id: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  imageurl: string;
  size: string;
  good_with_kids: string;
  good_with_animals: string;
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
  microshipped: boolean | null;
  last_checkup: string | null;
  medical_notes: string | null;
}

export default function Jadopte() {
  const [animaux, setAnimaux] = useState<Animal[]>([]);

  useEffect(() => {
    fetch("https://adadopte-api.onrender.com/animaux")
      .then(res => res.json())
      .then((data: Animal[]) => {
        console.log("Données reçues :", data);
        setAnimaux(data);
      })
      .catch(err => console.error("Erreur API :", err));
  }, []);

  return (
    <main>
      <h1>Animaux à adopter</h1>

      <div className="cards">
        {animaux.map((animal) => (
          <div key={animal.id} className="card">

            {/* IMAGE */}
            <img
              src={animal.imageurl}
              alt={animal.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h2>{animal.name}</h2>

            <p><strong>Espèce :</strong> {animal.type}</p>
            <p><strong>Race :</strong> {animal.breed}</p>

            <p><strong>Âge :</strong> {animal.age} ans</p>

            <p><strong>Ville :</strong> {animal.city}</p>
            <p><strong>Refuge :</strong> {animal.shelter}</p>

            <p>{animal.description}</p>

          </div>
        ))}
      </div>
    </main>
  );
}
