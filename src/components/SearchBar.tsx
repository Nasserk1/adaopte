import LocalisationFilter from "./LocalisationFilter";
import TypesFilter from "./TypesFilter";
// import { sql } from "../lib/sql";
// import { useQuery } from "@tanstack/react-query";
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
