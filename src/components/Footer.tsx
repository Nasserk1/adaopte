import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FiTwitch } from "react-icons/fi";

export default function Footer() {
    return (
        <footer>
            <h3>ADAOPTE</h3>
                <p>Notre mission est de trouver un foyer aimant pour chaque animal abandonné et de promouvoir le bien être animal.</p>
                <ImFacebook2 /> <BsTwitterX /> <FiTwitch />
            <h3>INFORMATIONS UTILES</h3>
                <p>FAQs</p>
                <p>Conseils d'adoption</p>
                <p>Nous contacter</p>
                <p>Mentions légales</p>
            <h3>CONTACT</h3>
                <p>Adresse : 12 rue de rivoli - 75012 Paris</p>
                <p>Mail : adaopte@test.fr</p>
                <p>Tél : 02 85 24 65 00</p>
            <h4>2026 ADAOPTE. Tous droits réservé</h4>
                <p>Ce site a été développé dans le cadre d'un projet d'ADA TECH SCHOOL</p>
        </footer>
        
    );
}