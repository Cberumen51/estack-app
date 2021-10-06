import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton } from '../NavButton/NavButton';
import { Container } from '../Container/Container';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Container d="container--row">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            -Stack
          </Link>
          {/* Navbar Menu Items */}
          <ul className="nav-menu">
            <NavButton buttonStyle='btn--dropdown' to='/about'>About Us</NavButton>
            <NavButton>Log In</NavButton>
            <NavButton>Register</NavButton>
          </ul>
        </Container>
      </nav>
    </>
  )
}

export default Navbar