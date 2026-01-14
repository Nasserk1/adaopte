import "./AnimalCardCss.css";
interface AnimalCardProps {
  type: string,
  name: string,
  breed: string,
  age: string | number,
  localisation: string,
  description: string,
  imageUrl: string,
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
        alt="Animal"
        className="animal-image"
      />

      <div className="animal-content">
        <p className="animal-type">{type}</p>

        <h2 className="animal-name">{name}</h2>

        <p className="animal-details">
          {breed} · {age}
        </p>

        <p className="animal-location">{localisation}</p>

        <p className="animal-description">{description}</p>

        <button className="animal-button">
          Rencontrer
        </button>
      </div>
    </div>
  );
}
