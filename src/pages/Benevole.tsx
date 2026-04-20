import "./Benevole.css";

export default function Benevole() {
  return (
    <main className="benevole">
      <h1>Devenir bénévole</h1>
      <p>
        Vous souhaitez vous engager pour la cause animale ? Rejoignez notre
        réseau de bénévoles et participez activement au bien-être des animaux.
      </p>
      <section className="benevole-why">
        <h2>Porquoi devenir bénévole ?</h2>
        <ul>
          <li>Aider les animaux au quotidien</li>
          <li>Soutenir les refuge et associations</li>
          <li>Parteciper à des actions solidaires</li>
        </ul>
      </section>
      <section className="benevole-how">
        <h2>Comment s'engager ?</h2>
        
        <p>
          Remplissez notre formulaire de conctact et nous vous recontacterons
          rapidement.
        </p>
            
  <p className="benevole-note">
  🤍 Aucun engagement immédiat. Nous vous expliquons tout avant de commencer.
</p>


      </section>
      <form className="benevole-form">
  <label>
    Nom
    <input type="text" placeholder="Votre nom" />
  </label>

  <label>
    Email
    <input type="email" placeholder="votre@email.fr" />
  </label>

  <label>
    Message
    <textarea placeholder="Pourquoi souhaitez-vous devenir bénévole ?" />
  </label>

  <button type="submit" className="btn success">
    Envoyer ma demande
  </button>
</form>
      <section className="benevole-cta">
        <a href="mailto:contact@adaopte.fr" className="btn success">
          Nous contacter
        </a>
      </section>
      
    </main>
  );
}

