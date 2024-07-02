import { useState } from 'react';
import './navbar.css';
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </div>

    </div>


    </>
  )
}

export default Navbar
