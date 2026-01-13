import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql.tsx";
import type { Dispatch, SetStateAction } from "react";


interface cityProps {
  city: string,
  setCity: Dispatch<SetStateAction<string>>
}
export default function LocalisationFilter({city, setCity}: cityProps) {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shelters"],
    queryFn: async () => {
      const result = await sql("SELECT city FROM shelters");
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  console.log(response);

  function isCity(text: string){
    const cityArray =[];
    for(const city of response){
      cityArray.push(city.city);
    }
    console.log(cityArray);
    const found = cityArray.find(cityFound=> cityFound===text);
    return found?? 'Aucun résultat';
  }

  return (
    <ul>
      <div className="localisation">
        <p>Localisation</p>
      </div>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Votre ville"></input>
      <p>{isCity(city)}</p>
    </ul>
  );
}
