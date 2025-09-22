import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-1 rounded-md transition transform -rotate-90 origin-left
     ${isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"}`;

  return (
    <header>
      {/* Logo */}
      <div className="p-4">
        <img src="DNC.svg" alt="DNC" className="w-20" />
      </div>

      {/* Menu lateral vertical */}
    <nav className="lateral">
      <NavLink to="/" className={navStyle}>home</NavLink>
      <NavLink to="/projetos" className={navStyle}>projetos</NavLink>
      <NavLink to="/sobre" className={navStyle}>sobre mim</NavLink>
      <NavLink to="/contato" className={navStyle}>contato</NavLink>
    </nav>
    </header>
  );
};

export default Header;
