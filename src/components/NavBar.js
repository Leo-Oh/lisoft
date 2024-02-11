import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from '../assets/img/logo.png';

import cv_es from '../assets/documents/CV-Leonardo_Daniel_Montiel_Martinez_es.pdf';

import { HashLink } from 'react-router-hash-link';


import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand href="#">
         <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-button"
            />{' '}
            LISOFT
        </Navbar.Brand>

        
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
    
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

            <NavDropdown title="Backend Project" id="collapsible-nav-dropdown">
              {/**
              <NavDropdown.Item href="#action/1.1">OCR</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Object Detection</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Devops</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">Web Scraping</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.4">API's Rest</NavDropdown.Item>
              */}
            </NavDropdown>

            <NavDropdown title="Fronted Project" id="collapsible-nav-dropdown">
              {/** 
              <NavDropdown.Item href="#action/2.1">Web Applications</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2"> Mobile Applications</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3"> Desktop Applications</NavDropdown.Item>
              */}
            </NavDropdown>

           

            <NavDropdown title="Blog" id="collapsible-nav-dropdown">
              {/** 
              <NavDropdown.Item href="#action/3.1">Install VirtulBox</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Install Rocky Linux</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Install Kubernetes Single Node</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Install Kubernetes Multi Node</NavDropdown.Item>

                 */}
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('')}>Let's Connect</Nav.Link>
            <Nav.Link href={cv_es} download="CV-Leonardo_Daniel_Montiel_Martinez.pdf" target="_blank" rel="noreferrer">
              Download cv
            </Nav.Link>

        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </Router>
  )
}
