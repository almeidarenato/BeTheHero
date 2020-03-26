import React from "react";
import "./styles.css";

import heroesImage from "../../assets/heroes.png";
import LogoImage from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImage} alt="Be the Hero" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID" />
          <button className="button">Entrar</button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não Tenho Cadastro
          </a>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes Logo" />
    </div>
  );
}
