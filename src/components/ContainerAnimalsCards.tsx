import "./ContainerAnimalCard.css";
import AnimalCard from "./AnimalCard";

interface Animal {
    id: string | number; // Changé en string | number pour accepter vos "a1", "a2"
    type: string;
    name: string;
    breed: string;
    age: number;
    shelter: string;
    description: string;
    image: string;     // <-- CORRECTION : Doit être "image" pour correspondre à votre fichier de données
}

interface AnimalsProps {
    animals : Array<Animal>
}

export default function Container({animals} : AnimalsProps) {
    return (
        <div className="container">
            {animals.length !== 0 ? (
                animals.map((el : Animal) => (
                <AnimalCard 
                    key={el.id} // Toujours ajouter une clé unique ici
                    type={el.type} 
                    age={el.age} 
                    name={el.name} 
                    localisation={el.shelter} 
                    breed={el.breed} 
                    imageUrl={el.image} // On prend "image" des datas et on l'envoie dans "imageUrl" de la Card
                    description={el.description}
                />
            ))) : (<div>Aucun résultat</div>)
        }
        </div>
    )
}