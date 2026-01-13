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
    <ul>
      <div className="type">
        <p>Type d'animal</p>
      </div>
      <p>{value}</p>
      <select name="animaux" id="animaux" onChange={(e) => setValue(e.target.value)}>
        {response?.data.map((element: type) => (
          <option key={element.id}>{element.name}</option>
        ))}
      </select>
    </ul>
  );
}
