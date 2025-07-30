'use client';
import {useEffect, useRef, useState} from 'react';

export default function About() {
 const sectionRef = useRef(null);
 const [change, setChange] = useState(false);

 useEffect(() => {
  const onScroll = () => {
   if (window.scrollY >= 200) {
    setChange(true);
   } else {
    setChange(false);
   }
  };

  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, []);

 return (
  <section ref={sectionRef} className={`about ${change ? 'change' : ''}`}>
   <div className="about-left">
    <img src="/images/about.jpg" />
   </div>
   <div className="about-right">
    <h1>About</h1>
    <h3>Hi! I'm Ann Smith</h3>
    <div className="info">
     <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos enim
      nesciunt magnam deserunt in necessitatibus id quisquam, voluptate repellat
      vero!
     </p>
     <div className="social-media">
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-instagram"></i>
     </div>
     <h4>Contact me here:</h4>
     <span>
      Email: <a href="#">annsmith@design.com</a>{' '}
     </span>
     <span>
      Phone: <a href="#">000 (123) 456 7890</a>{' '}
     </span>
    </div>
   </div>
  </section>
 );
}
