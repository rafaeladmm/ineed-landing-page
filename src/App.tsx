import React from "react";
import { Link } from "react-router-dom"; 
import "./App.css";

export default function App() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <img src="../assets/logo.png" alt="INeed Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/sobre">Sobre</Link>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h1>INeed — Conectando quem precisa com quem pode ajudar</h1>
            <h2 className="slogan">
              “seu serviço, sua necessidade, nossa comunidade”
            </h2>
            <p>
              O INeed é um aplicativo criado para facilitar a solidariedade e
              promover a empatia. Conectamos voluntários e beneficiários em um
              só lugar, tornando mais simples o ato de ajudar.
            </p>
            <button className="download-btn">Baixe o App</button>
          </div>

          {/* Mockup Image */}
          <div className="hero-image">
            <img src="../assets/principal.png" alt="Mockup INeed" />
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="features-section">
        <h2>Por que usar o INeed?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Conexão Rápida</h3>
            <p>Encontre e ofereça ajuda em poucos cliques.</p>
          </div>
          <div className="feature-card">
            <h3>Interface Intuitiva</h3>
            <p>Design simples e acessível, pensado para todos os públicos.</p>
          </div>
          <div className="feature-card">
            <h3>Segurança e Confiança</h3>
            <p>Validação de perfis e comunicação segura entre usuários.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contact-section">
        <h2>Fale Conosco</h2>
        <p>
          Quer ajudar ou precisa de suporte? Envie uma mensagem e responderemos
          rapidamente!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem" rows={4} required></textarea>
          <button type="submit" className="download-btn">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 INeed | Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
