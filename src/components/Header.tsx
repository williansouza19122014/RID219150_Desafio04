import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-1 rounded-md transition transform -rotate-90 origin-left
     ${isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"}`;

  return (
    <header className="hero">
      <div className="logo">DNC</div>
      <div className="side-nav-wrap">
        <nav className="side-nav">
          <NavLink to="/" className={navStyle}>
            home
          </NavLink>
          <NavLink to="/projetos" className={navStyle}>
            projetos
          </NavLink>
          <NavLink to="/sobre" className={navStyle}>
            sobre mim
          </NavLink>
          <NavLink to="/contato" className={navStyle}>
            contato
          </NavLink>
        </nav>
      </div>

      <h1 className="tagline">front-end. web (developer)</h1>
    </header>
  );
};

export default Header;
