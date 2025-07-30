'use client';
import {useEffect, useRef, useState} from 'react';

export default function Services() {
 const sectionRef = useRef(null);
 const [change, setChange] = useState(false);

 useEffect(() => {
  const onScroll = () => {
   if (sectionRef.current) {
    const top = sectionRef.current.offsetTop;
    if (window.scrollY >= top - 200) {
     setChange(true);
    } else {
     setChange(false);
    }
   }
  };

  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, []);

 return (
  <section ref={sectionRef} className={`services ${change ? 'change' : ''}`}>
   <div className="services-header">
    <h3>What I do</h3>
    <h1>My Services</h1>
   </div>
   <div className="services-list">
    <div className="list-item">
     <i className="fa-solid fa-layer-group"></i>
     <span>Space Planning</span>
     <span>Furniture Layout</span>
     <span>Surface Selection</span>
    </div>
    <div className="list-item">
     <i className="fa-solid fa-pen-nib"></i>
     <span>Lighting Design</span>
     <span>Interior Detailing</span>
     <span>Installation</span>
    </div>
    <div className="list-item">
     <i className="fa-sharp fa-solid fa-house"></i>
     <span>Color Selection</span>
     <span>Window Treatments</span>
     <span>Constructor Documentations</span>
    </div>
   </div>
  </section>
 );
}
