import React from "react";
import "./Header.css"

function Header() {
  return (
    <header>
      <nav>
        <ul className="header-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
