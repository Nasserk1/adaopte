import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/ContainerAnimalsCards';
// import { useState } from 'react';
import { sql } from "../lib/sql";
import { useQuery } from "@tanstack/react-query";

export default function Jadopte () {
     interface type {
    id: number;
    type: string;
    name: string;
    breed: string;
    age: number;
    shelter: string;
    description: string
  }

    const [searchParams] = useSearchParams();
    
    const type = searchParams.get('type') as never;
    const city = searchParams.get('city') as never;

    console.log(type, city);

    const {data : response, isLoading, error} = useQuery({
        queryKey: ["animals", type, city],
        queryFn: async () => {
            let temp;
            const reqSql = `
            SELECT animals.*, b.name as breed, shelters.city as shelter, types.name as type FROM animals 
            JOIN breeds as b ON animals.breed_id = b.id 
            JOIN shelters ON animals.shelter_id = shelters.id 
            JOIN types ON b.type_id = types.id
            `;

            if (type!=='Tous' && city){
                temp = await sql(reqSql + `WHERE types.name = ? AND shelters.city = ?`, [type, city]);
            } 
            else if (type!=='Tous' && type){
                temp = await sql(reqSql + `WHERE types.name = ?`, [type]);
            } else if (city!=='' && city){
                temp = await sql(reqSql + `WHERE shelters.city = ?`, [city]);
            } else {
                temp = await sql(reqSql);
            }
            const result = temp;

        if (!result.success) throw new Error(result.error);
        return result.data;
    },
        
    })

     if (isLoading) return <p>Chargement...</p>;
     if (error) return <p>Erreur : {error.message}</p>;

//      function isCity(text: string){
//     const cityArray =[];
//     for(const city of response){
//       cityArray.push(city.city);
//     }

//     const found = cityArray.find(cityFound => cityFound === text);
//     return found ?? 'Aucun résultat';
//   }

    return (
        <>
        <SearchBar />
        <Container />
        {response.map((el : type) => (<div key={el.name} style={{borderStyle: 'solid'}}>
            <p id='type'>{el.type}</p>
            <p id='name'>{el.name}</p>
            <p id='breed'>{el.breed}</p>
            <p id='age'>{el.age}</p>
            <p id='localisation'>{el.shelter}</p>
            <p id='description'>{el.description}</p>
            </div>))}
        </>
    )
} 
