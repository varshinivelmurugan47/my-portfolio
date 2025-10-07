import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>My Portfolio</h2>
      </div>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#222',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  title: {
    fontSize: '20px',
  },
  link: {
    color: 'white',
    marginLeft: '20px',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Navbar;
