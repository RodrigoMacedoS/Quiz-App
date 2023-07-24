import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Assine o nosso jornal para ler sobre os melhores destinos
        </p>
        <p className="footer-subscription-text">
          Você pode cancelar a qualquer momento
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Inscreva-se</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre nós</h2>
            <Link to="/sign-up">Como funciona</Link>
            <Link to="/">Depoimentos</Link>
            <Link to="/">Carreiras</Link>
            <Link to="/">Investidores</Link>
            <Link to="/">Termos de uso</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contato</h2>
            <Link to="/">Contato</Link>
            <Link to="/">Suporte</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Patrocínios</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>

            <Link to="/">Embaixadores</Link>
            <Link to="/">Agência</Link>
            <Link to="/">Influencers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div to="/" className="footer-logo">
            <Link className="social-logo">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
