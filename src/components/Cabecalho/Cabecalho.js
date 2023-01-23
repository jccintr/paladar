import "./Cabecalho.css";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import logo from "../../assets/paladar.png";

export default function Cabecalho({ openAdd }) {
  return (
    <header>
      <div>
        <img className="imgLogo" src={logo} alt="Paladar Logo" />
      </div>
      <div className="container-titulo">
        <p className="nome-estabelecimento">Lanchonete Paladar</p>
        <div>
          <p className="telefone-estabelecimento">
            <FaPhone size={14} /> 35-99912-2008
          </p>
        </div>
        <div>
          <p className="status-estabelecimento">
            <FaClock size={14} /> Aberto
          </p>
        </div>
      </div>
    </header>
  );
}
