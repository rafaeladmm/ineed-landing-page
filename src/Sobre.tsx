import { Link } from "react-router-dom";
import "./Sobre.css";

export default function Sobre() {
  const sections = [
    // SESSÃO DE CADASTRO E LOGIN
    {
      group: "cadastro",
      title: "1. Cadastro",
      text: "O primeiro passo no INeed é criar sua conta. Basta preencher alguns dados pessoais e escolher se deseja se cadastrar como Beneficiário ou Voluntário.",
      img: "/assets/1.png",
    },
    {
      group: "cadastro",
      title: "2. Aguardando Aprovação",
      text: "Após o cadastro, sua conta passa por uma breve análise realizada pelos administradores. Assim garantimos segurança e legitimidade para todos os usuários.",
      img: "/assets/2.png",
    },
    {
      group: "cadastro",
      title: "3. Login",
      text: "Após a aprovação, você já pode acessar o aplicativo usando seu e-mail e senha cadastrados.",
      img: "/assets/3.png",
    },

    // SESSÃO PÓS LOGIN
    {
      group: "logado",
      title: "4. Home",
      text: "Na tela inicial você encontra atalhos, recomendações, serviços, avisos e funcionalidades essenciais para navegação rápida e intuitiva.",
      img: "/assets/4.png",
    },
    {
      group: "logado",
      title: "5. Perfil",
      text: "No seu perfil você pode alterar dados pessoais, visualizar seu histórico e atualizar informações sempre que necessário.",
      img: "/assets/5.png",
    },
    {
      group: "logado",
      title: "6. Cadastro de Serviço",
      text: "Se você é voluntário, pode se candidatar para ajudar; se é beneficiário, pode solicitar um serviço informando suas necessidades. Tudo de forma simples e rápida.",
      img: "/assets/6.png",
    },
  ];

  return (
    <div className="sobre-page">

      {/* NAVBAR IGUAL AO APP */}
      <header className="navbar">
        <img src="/assets/logo.png" alt="INeed Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/sobre">Sobre</Link>
          <a href="/#funcionalidades">Funcionalidades</a>
          <a href="/#contato">Contato</a>
        </nav>
      </header>

      <div className="sobre-container">
        <h1 className="sobre-title">Sobre o INeed</h1>
        <p className="sobre-subtitle">
          Conheça o passo a passo para começar a usar o aplicativo.
        </p>

        {/* PRIMEIRA FASE – CADASTRO */}
        {sections
          .filter((s) => s.group === "cadastro")
          .map((section, index) => (
            <div
              key={index}
              className={`sobre-section ${index % 2 !== 0 ? "invertida" : ""}`}
            >
              <div className="sobre-text">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>

              <div className="sobre-img">
                <img src={section.img} alt={section.title} />
              </div>
            </div>
          ))}

        {/* DIVISOR ENTRE AS DUAS FASES */}
        <div className="linha-divisao">
          <span>Depois do Login</span>
        </div>

        {/* SEGUNDA FASE – USO DO APP */}
        {sections
          .filter((s) => s.group === "logado")
          .map((section, index) => (
            <div
              key={index}
              className={`sobre-section ${index % 2 !== 0 ? "invertida" : ""}`}
            >
              <div className="sobre-text">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>

              <div className="sobre-img">
                <img src={section.img} alt={section.title} />
              </div>
            </div>
          ))}
      </div>

      <footer className="footer">
        <p>© 2025 INeed | Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
