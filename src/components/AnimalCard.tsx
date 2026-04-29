import "./AnimalsCards.css"; // Vérifiez bien que le nom correspond au fichier CSS créé

interface AnimalCardProps {
  type: string;
  name: string;
  breed: string;
  age: string | number;
  localisation: string;
  description: string;
  imageUrl: string; // Cette prop recevra le chemin "/images/nom-du-fichier.jpg"
}

export default function AnimalCard({
  type,
  name,
  breed,
  age,
  localisation,
  description,
  imageUrl
}: AnimalCardProps) {
  return (
    <div className="animal-card">
      <img
        src={imageUrl}
        alt={`Photo de ${name}`}
        className="animal-image"
      />

      <div className="animal-content">
        <p className="animal-type">{type}</p>

        <h2 className="animal-name">{name}</h2>

        <div className="animal-details-group">
          <p className="animal-detail-item">
            <span className="detail-label">Race :</span> {breed}
          </p>
          <p className="animal-detail-item">
            <span className="detail-label">Âge :</span> {age} {typeof age === 'number' && age > 1 ? 'ans' : 'an'}
          </p>
          <p className="animal-detail-item">
            <span className="detail-label">Ville :</span> {localisation}
          </p>
        </div>

        <p className="animal-description">{description}</p>

        <button 
          className="animal-button" 
          onClick={() => alert(`Merci de vouloir rencontrer ${name} !`)}
        >
          Rencontrer
        </button>
      </div>
    </div>
  );
}