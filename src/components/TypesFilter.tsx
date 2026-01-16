import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql.tsx";
import type { Dispatch, SetStateAction } from "react";

interface typeProps {
  value: string,
  setValue: Dispatch<SetStateAction<string>>
}
export default function TypesFilter({value, setValue} : typeProps) {
  interface type {
    id: number;
    name: string;
  }

  interface responseTypes {
    data : type[],
    success : boolean
  }

  const {
    data: response,
    isLoading,
    error,
  } = useQuery <responseTypes>({
    queryKey: ["types"],
    queryFn: async () => {
      const result = await sql("SELECT * FROM types");
      if (!result.success) throw new Error(result.error);
      return result;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;


  return (
        <div className="animalType">
  <label htmlFor="animalTypes">Type d'animal</label>
  
      <select id="animalTypes" name="animalTypes" onChange={(e) => setValue(e.target.value)}>
        {value === "Tous les animaux" ? <option value="Tous" selected>Tous les animaux</option> : <option value="Tous">Tous les animaux</option>}
        {response?.data.map((element: type) => (
          <option key={element.id} value={element.name}>{element.name}</option>
        ))}
      </select>
      </div>
  );
}
