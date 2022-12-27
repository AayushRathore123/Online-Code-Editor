import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Regnav(){
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container className="headnav">
        <Link className='brand' to='/'> 
        <img alt="logo" src={require('../images/logo.png')} />
        <span >CoDio</span>
      
        </Link>
        
        
        </Container>
      </Navbar>
    </div>
  );
};


