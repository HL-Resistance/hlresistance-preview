import React from 'react';
import './NavigationBar.css';
import logo from '../image/Logo.png';
import { Navbar, Nav } from 'react-bootstrap';
// import logo from 'Logo.png';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
      <Navbar.Brand href="/">
        <img className="logo-image" src={logo} alt="logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="/"><p className="linkText">HOME</p></Nav.Link>
          <Nav.Link href="/about"><p className="linkText">HOLOLIVE</p></Nav.Link>
          <Nav.Link href="/community"><p className="linkText">OUR COMMUNITY</p></Nav.Link>
          <Nav.Link href="/creative"><p className="linkText">CREATIVE WORKS</p></Nav.Link>
          <Nav.Link href="/translation"><p className="linkText">HOLOLIVE TRANSLATION</p></Nav.Link>
          <Nav.Link href="https://discord.gg/hololive-resistance" target="_blank"><p className="linkText">COME JOIN US!</p></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
