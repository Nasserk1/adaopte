import { Link } from "react-router-dom";
import "./Home.css";



export default function Home() {
    return (
        <main>
            <section className="hero">
            <h1>🐾🐾Bienvenue sur Adaopte🐾🐾</h1>
            <p>Donnons-leur autant qu'ils nous apportent.
                Chaque jour, des milliers d'animaux attendent une famille aimante.
                Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption.
            </p>
        </section>

            <section>
                <h2>Nos animaux à adopter</h2>
                {/* ici viendra la liste des animaux */}
                <p>Découvrez les animaux disponibles pour l'adoption.
                     Chaque photo raconte une histoire et un espoir.
                        <div className="animal-preview">
                     <div className="card">🐶chien</div>
                        <div className="card">🐱chat</div>
                        </div>
                </p>
            </section>

            {/* Processus d'adoption */}
            <section>
                <h2>Comme ça marche</h2>
                <p>Adopter un animal est un engagement sérieux et à long terme. Voici notre processus d'adoption en quelques étapes simples.</p>
                    <ol>
                        <li>Trouvez votre compagnon</li>
                        <p>Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celui qui correspond à votre mode de vie.</p>
                        
                        <li>Remplissez une demande d'adoption</li>
                        <p>Soumettez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinons chaque demande avec soin.</p>
                        
                        <li>Rencontrez l'animal</li>
                        <p>Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est une étape essentielle du processus.</p>
                        <li>Bienvenue à la maison</li>
                        <p>Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller.
                </p>
                   </ol>
          </section>
                    
                      

                    {/*Call To Action*/}
                    <section>
                        <h2>Prêt(e) à chancher une vie ?</h2>
                        <p>Adoptez, partagez, soutenez... Chaque geste compte. Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné.</p>
                    
                   
                        <p>Notre mission est de trouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal.</p>

                        <Link to="/Jadopte" className="cta-button">
                         Adopter un animal
                         </Link>

                    </section>

              
            
        </main>
    );
}