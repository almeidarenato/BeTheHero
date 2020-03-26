import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import LogoImage from "../../assets/logo.svg";

function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImage} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrem
            os casos da sua ONG.
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Já Tenho Cadastro
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
