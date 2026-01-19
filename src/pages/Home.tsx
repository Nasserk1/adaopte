import { Link } from "react-router-dom";
import { animals } from "../data/animals";
import SearchBar from "../components/SearchBar";
import "../components/SearchBar.css";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <section
        className="hero"
        aria-label="Présentation de la plateforme d'adoption"
      >
        <div className="hero-content">
          <h1>Donnons-leur autant qu'ils nous apportent</h1>

          <p>
            Chaque jour, des milliers d'animaux attendent une famille aimante.
            Trouvez votre compagnon idéal parmi nos animaux disponibles à
            l'adoption.
          </p>
        </div>
      </section>
      <SearchBar />
      <section className="animals-section">
        <h2>Nos animaux à adopter</h2>
        <p>
          Découvrez en images tous nos animaux qui attendent une famille
          aimante. Chaque photo raconte une histoire et un espoir.
        </p>

        {/* Grid des animaux */}
        <div className="animals-grid">
          {[
            animals[2], // Col1 grande
            animals[1], // Col2 piccola
            animals[3], // Col3 grande
            animals[5], // Col4 piccola
            animals[4], // Col1 piccola
            animals[0], // Col2 grande
            animals[7], // Col3 piccola
            animals[6], // Col4 grande
          ].map((animal, index) => (
            <div
              key={animal.id}
              className={
                index === 0 || index === 2 || index === 5 || index === 7
                  ? "animal-item animal-item--tall"
                  : "animal-item"
              }
            >
              <img src={animal.image} alt={animal.type} />
            </div>
          ))}
        </div>
        {/*button */}
        <Link to="/jadopte" className="see-all">
          Voir tous les animaux
        </Link>
      </section>
      {/* Processus d'adoption */}
      <section className="how-it-works">
        <h2>Comment ça marche</h2>
        <p className="subtitle">
          Adopter un animal est un engagement sérieux et à long terme.
        </p>

        <div className="steps">
          <div className="step-card">
            <span className="icon">🔍</span>
            <h3>1.Trouvez votre compagnon</h3>
            <p>Parcourez notre base de données et utilisez les filtres.</p>
          </div>

          <div className="step-card">
            <span className="icon">📝</span>
            <h3>2.Remplissez une demande</h3>
            <p>Soumettez votre formulaire d’adoption.</p>
          </div>

          <div className="step-card">
            <span className="icon">🤝</span>
            <h3>3. Rencontrez l’animal</h3>
            <p>Visitez le refuge pour vérifier la compatibilité.</p>
          </div>

          <div className="step-card">
            <span className="icon">🏠</span>
            <h3>4. Bienvenue à la maison</h3>
            <p>Accueillez votre nouvel ami chez vous.</p>
          </div>
        </div>
      </section>{" "}
      {/* fine how-it-works */}
      <section className="call-to-action">
        <h2>Prêt·e à changer une vie ?</h2>
        <p>Adoptez, partagez, soutenez. Chaque geste compte.</p>

        <div className="cta-buttons">
          <Link to="/jadopte" className="btn primary">
            Adopter un animal
          </Link>

          <Link to="/don" className="btn danger">
            Faire un don
          </Link>

          <Link to="/benevole" className="btn success">
            Devenir bénévole
          </Link>
        </div>
      </section>
    </main>
  );
}
