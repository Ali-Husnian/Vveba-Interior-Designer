import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
   <footer>
    <div className="footer-social-media">
     <i className="fa-brands fa-twitter"></i>
     <i className="fa-brands fa-facebook-f"></i>
     <i className="fa-brands fa-instagram"></i>
    </div>
    <h1>Contact Me</h1>
    <a href="#">annsmith@email.com</a>
    <p className="copyright">
     Copyright &copy; {currentYear}. All Rights Reserved | Made By
     <span>Code And Create</span>
    </p>
   </footer>
  );
}
