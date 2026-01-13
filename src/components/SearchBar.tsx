import LocalisationFilter from "./LocalisationFilter";
import TypesFilter from "./TypesFilter";
import { useState } from "react";

export default function SearchBar(){
const [city, setCity]= useState('')
const [value, setValue] = useState('');
return (
    <>
<TypesFilter value={value} setValue={setValue} />
<LocalisationFilter city={city} setCity={setCity} />

</>
)
}
