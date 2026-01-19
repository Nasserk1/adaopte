import "./ContainerAnimalCard.css";
import AnimalCard from "./AnimalCard";

interface Animal {
    id: number;
    type: string;
    name: string;
    breed: string;
    age: number;
    shelter: string;
    description: string;
    imageUrl: string
}

interface Animals {
    animals : Array<Animal>
}

export default function Container({animals} : Animals) {
    return (
        <div className="container">
        
            {animals.length!==0 ? (
                animals.map((el : Animal) => (
                <AnimalCard 
                    type={el.type} 
                    age={el.age} 
                    name={el.name} 
                    localisation={el.shelter} 
                    breed={el.breed} 
                    imageUrl={'src/' + el.imageUrl}
                    description={el.description}
                />
            ))) : (<div>Aucun résultat</div>)
        }
        </div>
    )
}