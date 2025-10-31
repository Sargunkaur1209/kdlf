import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../COMPONENTS/Header.css";

const Header = () => {
  return (
    <nav className="Header">
      {/* Logo and text container for combined branding */}
      <div className="LogoContainer">
        <img src={Logo} alt="Logo" className="Img"/>
        <span className="LogoText">KHALSA DI LADLI FAUJ</span>
      </div>
      
      <div className="Links">
        <Link to="/" className="links">Home</Link>
        <Link to="/about" className="links">About Us</Link>
        <Link to="/contact" className="links">Contact Us</Link>
        <Link to="/learning" className="links">Learn With Us</Link>
        <Link to="/ExploreEvents" className="links">Explore Events</Link>
        
        {/* Login and Signup buttons */}
        <Link to="/login" className="LogSin">Login</Link>
        <Link to="/signup" className="LogSin">Signup</Link>
      </div>
    </nav>
  )
}

export default Header;
