import React from "react";
import "./Header.css";
import zurichLogo from "../svg/zurichLogo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header () {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src={zurichLogo} alt="logo" className="zurichLogo" />
                <NavDropdown title="Demos" id="nav-dropdown">
                    <NavDropdown.Item eventKey="1"><Link to="/demo1">Demo 1</Link></NavDropdown.Item>
                    <NavDropdown.Item eventKey="2"><Link to="/demo2">Demo 2</Link></NavDropdown.Item>
                    <NavDropdown.Item eventKey="3"><Link to="/demo3">Demo 3</Link></NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="headerText">
                <h1>Dokumentenbibliothek</h1>
            </div>
        </header>
    );
}

export default Header;
