import LocalisationFilter from "./LocalisationFilter";
import TypesFilter from "./TypesFilter";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar(){
const [city, setCity]= useState('')
const [value, setValue] = useState('Tous');
const navigate = useNavigate();

const handleSubmit = (e: FormEvent<HTMLFormElement>): void => { 
e.preventDefault();

const params = new URLSearchParams();
if (value){
    params.set('type', value);
};
if (city){
    params.set('city', city);
};
const url = '/Jadopte?' + params.toString();
navigate(url);
}

function reset(){
    navigate('/Jadopte');
    setValue('Tous');
    setCity('');
}

return (
    <div className="searchbar-wrapper">
      <form onSubmit={handleSubmit}>
        <TypesFilter value={value} setValue={setValue} />
        <LocalisationFilter city={city} setCity={setCity} />
        <button className="searchButton" type='submit'>Rechercher 🔎</button>
      </form>
      
      <button className="initButton" type='button' onClick={reset}>
        Réinitialiser les filtres
      </button>
    </div>
  )
}

// /jadopte?type=chien&localisation=Lyon
