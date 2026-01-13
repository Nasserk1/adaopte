import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
// import { useState } from 'react';
import { sql } from "../lib/sql";
import { useQuery } from "@tanstack/react-query";

export default function Jadopte () {
     interface type {
    id: number;
    name: string;
    breed_id: number;
    age: number;
    shelter_id: number;
    description: string
  }

    const [searchParams] = useSearchParams();
    
    const type = searchParams.get('type');
    const city = searchParams.get('city');

    console.log(type, city);

    const {data: response, isLoading, error} = useQuery({
        queryKey: ["animals"],
        queryFn: async () => {
        const result = await sql("SELECT * FROM animals");
        if (!result.success) throw new Error(result.error);
        return result.data;
        },
    })

     if (isLoading) return <p>Chargement...</p>;
     if (error) return <p>Erreur : {error.message}</p>;

     console.log(response)

    return (
        <>
        <p>FILTER</p>
        <SearchBar />
        {response.map((el : type) => (<div key={el.name}>
            <p id='name'>{el.name}</p>
            <p id='breed'>{el.breed_id}</p>
            <p id='age'>{el.age}</p>
            <p id='localisation'>{el.shelter_id}</p>
            <p id='description'>{el.description}</p>
            </div>))}
        </>
    )
} 
