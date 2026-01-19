import { NavLink } from "react-router-dom";
import "./Header.css";
import { Bone, Fish, House, Squirrel } from 'lucide-react';

export default function Header() {
  return (
    <header id="header-container">
      <div id="adaopte-logo">
        <nav>
          <NavLink to={"/"} id="adaopte-style">🐾<span id="ada-style">Ada</span><span id="opte-style">opte</span>
          </NavLink>
        </nav>
      </div>
      <div id="header-nav">
        <NavLink to={"/"} className="icon-container"><span className="icon-container" id="acceuil-container"><House size={18}/>&nbsp;Accueil</span></NavLink>
        <NavLink to={"/jadopte"} className="icon-container"><span className="icon-container" id="jadopte-container"><Bone size={18}/>&nbsp;J'adope</span></NavLink>
        <span className="icon-container" id="adoption-container"><Fish size={18}/>&nbsp;Guide de l'adoption</span>
        <span className="icon-container" id="benevole-container"><Squirrel size={18}/>&nbsp;Devenir bénévole</span>
      </div>
      <div id="faire-un-don-button">Faire un don <span id="handheart-icon">🫶</span></div>
    </header>
  );
}
