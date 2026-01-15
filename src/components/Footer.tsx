import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandTwitch } from "react-icons/tb";



export default function Footer() {
    return (
        <footer className="footerSection">
            <h3>ADAOPTE</h3>
            <p>Notre mission est de trouver des foyers aimants pour des animaux abandonnés et de promouvoir le bien-être animal.</p>
            <FaFacebookSquare />
            <AiFillInstagram />
            <FaLinkedin />
            <TbBrandTwitch />
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