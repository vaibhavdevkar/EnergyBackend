import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logoLeft from '../assets/bajajlogo.png'; // Import your left logo image file
import logoRight from '../assets/navbartheta.png'; // Import your right logo image file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* Left Logo/Image */}
        <a className="navbar-brand" href="#" style={{marginBottom : "-1.5rem"}}>
          <img src={logoRight} alt="Left Logo" width="100" height="50" />
        </a>

        {/* Navbar Toggler for mobile */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

    
        {/* Right Logo/Image */}
        <a className="navbar-brand" href="#" style={{marginBottom : "-1.5rem"}}>
          <img src={logoLeft} alt="Right Logo" width="160" height="50" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
