import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/ContainerAnimalsCards';
import { sql } from "../lib/sql";
import { useQuery } from "@tanstack/react-query";

export default function Jadopte () {
     
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
                temp = await sql(reqSql + `WHERE types.name = ? AND shelters.city = ? LIMIT 8`, [type, city]);
            } 
            else if (type!=='Tous' && type){
                temp = await sql(reqSql + `WHERE types.name = ? LIMIT 8`, [type]);
            } else if (city!=='' && city){
                temp = await sql(reqSql + `WHERE shelters.city = ? LIMIT 8`, [city]);
            } else {
                temp = await sql(reqSql + `LIMIT 8`);
            }
            const result = temp;

        if (!result.success) throw new Error(result.error);
        console.log(result.data)
        return result.data;
    },
        
    })

     if (isLoading) return <p>Chargement...</p>;
     if (error) return <p>Erreur : {error.message}</p>;

    return (
        <>
        <SearchBar />
        <Container animals={response}/>
        </>
    )
} 
