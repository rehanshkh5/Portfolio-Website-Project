import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Headers">
      <div className="Container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className={`navMenu ${menuOpen ? "open" : ""}`}>
          <li className="active">Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </nav>

        <button className="btn">HIRE ME</button>

        <div className="hamburgerIcon" onClick={toggleMenu}>
          {menuOpen ? (
            <IoMdClose size={30} color="#fff" />
          ) : (
            <GiHamburgerMenu size={26} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
