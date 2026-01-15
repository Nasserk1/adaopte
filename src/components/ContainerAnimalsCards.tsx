import "./ContainerAnimalCard.css";
import AnimalCard from "./AnimalCard";

export default function Container() {
    return (
        <div className="container">
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
            <AnimalCard 
                type="Tortue" 
                age={25} 
                name="Tata" 
                localisation="Nantes" 
                breed="méditerranéenne" 
                imageUrl="src/images/background.jpg" 
                description="Tortue adorable"
            />
            <AnimalCard 
                type="Rat d'égout" 
                age={3} 
                name="Ratatouille" 
                localisation="Paris" 
                breed="Ratus rongerus" 
                imageUrl="src\images\chinchilla-01.jpg" 
                description="en direct des égouts de Paris"
            />
            <AnimalCard 
                type="Chat" 
                age={3} 
                name="Minou" 
                localisation="Paris" 
                breed="Chat de gouttière" 
                imageUrl="src\images\cat-persian-01.jpg" 
                description="Chasseur de souris"
            />
            <AnimalCard 
                type="Chat" 
                age={3} 
                name="Matou" 
                localisation="Lille" 
                breed="Chat de gouttière" 
                imageUrl="src/images/chan-swan-NKyl19P5IHg-unsplash.jpg" 
                description="Gros matou adorable"
            />
            <AnimalCard 
                type="Serpent" 
                age={3} 
                name="Serpentar" 
                localisation="Lille" 
                breed="Boa émeraude" 
                imageUrl="src/images/rat-dumbo-01.jpg" 
                description="serpent très docile"
            />
             <AnimalCard 
                type="Chien" 
                age={4} 
                name="Rex" 
                localisation="Lille" 
                breed="Rotwiller" 
                imageUrl="src/images/dog-beagle-01.jpg" 
                description="Chien à adopter"
            />
        

        </div>
    )
}