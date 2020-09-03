import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Tubless.in <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Layanan
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/partner"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Mitra
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-links" onClick={closeMobileMenu}>
                Bantuan
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/download"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Unduh
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Daftar
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">DAFTAR</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
