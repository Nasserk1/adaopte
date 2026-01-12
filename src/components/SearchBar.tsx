import LocalisationFilter from "./LocalisationFilter";
import TypesFilter from "./TypesFilter";
import { useState } from "react";

export default function SearchBar(){
const [city, setCity]= useState('')
return (
    <>
<TypesFilter />
<LocalisationFilter city={city} setCity={setCity} />

</>
)
}
