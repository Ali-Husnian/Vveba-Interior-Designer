'use client';

import React, {useState} from 'react';

export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

 return (
  <>
   <div className="rectangle rectangle-1"></div>
   <div className="rectangle rectangle-2"></div>

   <nav className="navbar">
    <div className="designer">
     <img src="/images/designer.jpg" alt="Designer" />
     <div>
      <span>Ann Smith</span>
      <span>Interior Designer</span>
     </div>
    </div>

    {/* Toggle Menu Button */}
    <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
     <div className="line line-1"></div>
     <div className="line line-2"></div>
     <div className="line line-3"></div>
    </div>

    {/* Navigation Overlay */}
    <div className={`navigation ${isMenuOpen ? 'navigate' : ''}`}>
     <div className="nav-left">
      <img src="/images/nav.jpg" alt="Nav" />
     </div>

     <div className="nav-right">
      {/* Close Button */}
      <div className="x-btn" onClick={() => setIsMenuOpen(false)}>
       <div className="x-line x-line-1"></div>
       <div className="x-line x-line-2"></div>
      </div>

      <h1>Ann Smith</h1>

      <div className="nav-list">
       {navLinks.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
         {link}
        </a>
       ))}
      </div>
     </div>
    </div>
   </nav>
  </>
 );
}
