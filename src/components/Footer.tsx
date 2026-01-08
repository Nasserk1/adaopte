import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandTwitch } from "react-icons/tb";



export default function Footer() {
    return (
        <footer>
            <h3>ADAOPTE</h3>
            <p>Notre mission est de trouver des foyers aimants pour des animaux abandonnés et de promouvoir le bien-être animal.</p>
            <FaFacebookSquare />
            <AiFillInstagram />
            <FaLinkedin />
            <TbBrandTwitch />
            <h3>NOUS CONTACTER :</h3>
            <p>Adresse : 25 Bd Viviani - 69008 Lyon</p>
            <p>Email : jadopte@test.fr</p>
            <p>Tél : 04 72 47 22 00</p>
        </footer>
        
    );
}