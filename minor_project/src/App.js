import React from 'react'
import Navbar from "./components/navbar";
import {Link} from 'react-router-dom'
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='box'>
      <h3>CoDio</h3>
      <Link className='know' to='#'>Get Started</Link>
      </div>
      
    </div>
  );
}