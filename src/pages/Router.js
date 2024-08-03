import React from 'react'
import { Routes, Route} from "react-router-dom";
import About from './About';
import Career from './Career';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import Tranning from './Tranning';
import Navbar from './Navbar';
// import NavBar from './Nav';

function Router() {
  return (
    <>
        <div>
            <Navbar/>
            {/* <NavBar/> */}
        </div>
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tranning" element={<Tranning />} />
          <Route path="/career" element={<Career />} />
         
         
        </Routes>
    </>
  )
}

export default Router
