import React from 'react'
import {Link} from "react-router-dom";
import './navbar.css';
import logo from '../images/logo.svg'
import { FiAlignJustify } from "react-icons/fi";


export default function Navbar() {
  const [show, setShow] =       React.useState(true);
  return (

    <nav className='navbar'>
    <ul className='nav-ul'>
    <img className='nav-img' src={logo} alt="BigCo Inc. logo"/>
    <div className='li-tag'>
      <li className='nav-li'>
        <Link className='link' to="/">Home</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/about">About</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/contact">Contact</Link>
      </li>
   
      <li className='nav-li'>
        <Link className='link' to="/portfolio">Portfolio</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/services">Services</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/tranning">Tranning</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/career">Career</Link>
      </li>


      </div>
      <button className='nav-icon' onClick={() => setShow(!show)}> 
           <FiAlignJustify /></button>
      {show && <div className='nav-mobile-view'>
        
        <ul className='nav-ul'>
    <img className='nav-img' src={logo} alt="BigCo Inc. logo"/>
    <div className='li-tag-mob'>
      <li className='nav-li'>
        <Link className='link' to="/">Home</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/about">About</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/contact">Contact</Link>
      </li>
   
      <li className='nav-li'>
        <Link className='link' to="/portfolio">Portfolio</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/services">Services</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/tranning">Tranning</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/career">Career</Link>
      </li>
      </div>
    </ul>
        
        </div>}
    </ul>
  </nav>
  
    )
}

