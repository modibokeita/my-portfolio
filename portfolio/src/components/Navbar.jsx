import { useState } from 'react';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="navbar">
        <div className="brand-title">MK</div>
        <a href="#" className="toggle-button" onClick={handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <div className={`nav-link ${isActive ? 'active' : ''}`}>
            <ul>
                <li> <Link to="home">Home</Link></li>
                <li> <Link to="project">Projects</Link></li>
                <li> <Link to="about">About Me</Link></li>
                <li> <Link to="contact">Contact</Link></li>

            </ul>

        </div>

    </div>

    <Outlet />
    </>
  )
}

export default Navbar
