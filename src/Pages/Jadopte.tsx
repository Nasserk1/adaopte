import SearchBar from '../components/SearchBar';
import AnimalCard from "../components/AnimalCard"
// import { useState } from 'react';
// import { sql } from "../lib/sql";
// import { useQuery } from "@tanstack/react-query";

export default function Jadopte () {
    return (
        <>
            <p>FILTER</p>
            <SearchBar />
            <AnimalCard 
                type="chat" 
                age={5} 
                name="tedy" 
                localisation="Lyon" 
                breed="angora" 
                imageUrl="src/images/alin-luna-8LfPXM6abRk-unsplash.jpg" 
                description="Chat à adopter"
            />
            <AnimalCard 
                type="Chien" 
                age={6} 
                name="toutou" 
                localisation="Nantes" 
                breed="malinois" 
                imageUrl="src/images/alan-king-KZv7w34tluA-unsplash.jpg" 
                description="Chien à adopter"
            />
        </>
    )
} 
