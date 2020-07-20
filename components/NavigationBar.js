import React from 'react';
import styles from './NavigationBar.module.css';
import logo from '../public/image/Logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import Link from "next/link";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.colorNav} variant="dark">
      <Navbar.Brand href="/">
        <img className={styles.logoImage} src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          <Link href="/"><a className={styles.linkText}>HOME</a></Link>
          <Link href="/about"><a className={styles.linkText}>HOLOLIVE</a></Link>
          <Link href="/community"><a className={styles.linkText}>OUR COMMUNITY</a></Link>
          <Link href="/creative"><a className={styles.linkText}>CREATIVE WORKS</a></Link>
          <Link href="/translation"><a className={styles.linkText}>HOLOLIVE TRANSLATION</a></Link>
          <a href="https://discord.gg/hololive-resistance" target="_blank" className={styles.linkText}>COME JOIN US!</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
