import { TbBrandFacebook } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitch } from "react-icons/fi";
import "./Footer1.css";


export default function Footer() {
    return (
        <footer className="footerCard">
        <div id="TopBloc">
            <div id="Adaopte">
            <h3 className="Adaopte">ADAOPTE</h3>
            <p>Notre mission est de trouver des foyers aimants pour des animaux abandonnés et de promouvoir le bien-être animal.</p>
                <p id="logo">
                <span className="icon-circle"><TbBrandFacebook /></span>
                <span className="icon-circle"><FaInstagram /></span>
                <span className="icon-circle"><SlSocialLinkedin /></span>
                <span className="icon-circle"><FiTwitch /></span>
</p>
            </div>
            <div id="InfoUtiles">
                <h3>INFORMATIONS UTILES</h3>
                <br />
                <p>FAQs</p>
                <p>Conseils d'adoption</p>
                <p>Nous contacter</p>
                <p>Mentions légales</p>
            </div>
            <div className="Contact">
                <h3 >CONTACT</h3>
                <br />
                <p>Adresse : 116 rue du Faubourg Saint-Martin</p> 
                <p>75010 Paris, France</p>
                <a href="mailto:adaopte@test.fr">contact@adaopte.fr</a>
                <p>Tél : +33 1 23 45 67 89</p>
            </div>
            </div>
            <hr/>
            <div id="BottomBloc">
                <h4 >2026 ADAOPTE. Tous droits réservés</h4>
                <p>Ce site a été développé dans le cadre d'un projet d'ADA TECH SCHOOL</p>
            </div>
        </footer>
    )
}