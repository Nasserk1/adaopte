import type { Dispatch, SetStateAction } from "react";


interface cityProps {
  city: string,
  setCity: Dispatch<SetStateAction<string>>
}
export default function LocalisationFilter({city, setCity}: cityProps) {

  return (

    <div id='localisation'>
      <label htmlFor="localisation">Localisation</label>
      <input
        value= {city} type="text" name="localisation"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Votre ville"></input>
    </div>
  );
}
