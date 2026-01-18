import { Link } from "react-router-dom";
import { animals } from "../data/animals";
import SearchBar from "../components/SearchBar";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <section
        className="hero"
        aria-label="Présentation de la plateforme d'adoption"
      >
        <div className="hero-content">
          <h1>🐾🐾Bienvenue sur Adaopte🐾🐾</h1>
          <p>
            Donnons-leur autant qu'ils nous apportent. Chaque jour, des milliers
            d'animaux attendent une famille aimante. Trouvez votre compagnon
            idéal parmi nos animaux disponibles à l'adoption.
          </p>
        </div>
        <SearchBar />
      </section>

      <section className="animals-section">
        <h2>Nos animaux à adopter</h2>
        <p>
          Découvrez en images tous nos animaux qui attendent une famille
          aimante. Chaque photo raconte une histoire et un espoir.
        </p>

        {/* Grid des animaux */}
        <div className="animals-grid">
          {animals.map((animal) => (
            <div key={animal.id} className="animal-item">
              <img src={animal.image} alt={animal.type} />
            </div>
          ))}
        </div>
      </section>

      <Link to="/jadopte" className="see-all">
        Voir tous les animaux
      </Link>

      {/* Processus d'adoption */}
      <section>
        <h2>Comme ça marche</h2>
        <p>
          Adopter un animal est un engagement sérieux et à long terme. Voici
          notre processus d'adoption en quelques étapes simples.
        </p>
        <ol>
          <li>
            <strong>Trouvez votre compagnon</strong>
            <p>
              Parcourez notre base de données d'animaux disponibles et utilisez
              nos filtres pour trouver celui qui correspond à votre mode de vie.
            </p>
          </li>
          <li>
            <strong>Remplissez une demande d'adoption</strong>
            <p>
              Soumettez votre formulaire d'adoption pour l'animal qui vous
              intéresse. Nous examinons chaque demande avec soin.
            </p>
          </li>
          <li>
            <strong>Rencontrez l'animal</strong>
            <p>
              Visitez le refuge pour rencontrer l'animal et voir si vous êtes
              compatibles. C'est une étape essentielle du processus.
            </p>
          </li>
          <li>
            <strong>Bienvenue à la maison</strong>
            <p>
              Une fois votre demande approuvée, vous pouvez accueillir votre
              nouvel ami chez vous. Nous restons disponibles pour vous
              conseiller.
            </p>
          </li>
        </ol>
      </section>

      {/*Call To Action*/}
      <section>
        <h2>Prêt(e) à chancher une vie ?</h2>
        <p>
          Adoptez, partagez, soutenez... Chaque geste compte. Que vous ouvriez
          votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un
          animal abandonné.
        </p>

        <p>
          Notre mission est de trouver des foyers aimants pour chaque animal
          abandonné et de promouvoir le bien-être animal.
        </p>

        <Link
          to="/jadopte"
          className="cta-button"
          aria-label="Accéder à la page d’adoption"
        >
          Adopter un animal
        </Link>
      </section>
    </main>
  );
}
