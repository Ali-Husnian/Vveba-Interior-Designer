'use client';
import React, {useEffect, useRef, useState} from 'react';

export default function Achievments() {
 const sectionRef = useRef(null);
 const [started, setStarted] = useState(false);
 const [counts, setCounts] = useState([0, 0, 0]);

 const targetValues = [385, 652, 1000];

 useEffect(() => {
  const onScroll = () => {
   if (!sectionRef.current || started) return;

   const sectionTop = sectionRef.current.offsetTop;
   if (window.scrollY >= sectionTop - 300) {
    setStarted(true);
    startCounting();
   }
  };

  const startCounting = () => {
   targetValues.forEach((val, index) => {
    let count = 0;
    const interval = setInterval(() => {
     count++;
     setCounts((prev) => {
      const updated = [...prev];
      updated[index] = count;
      return updated;
     });

     if (count === val) clearInterval(interval);
    }, 5);
   });
  };

  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, [started]);

 return (
  <section ref={sectionRef} className="data">
   <div className="data-header">
    <h3>Achievments</h3>
    <h1>Let's Share My Achievments</h1>
   </div>
   <div className="data-list">
    <div className="data-item">
     <span>Clients</span>
     <span className="num">{counts[0]}</span>
    </div>
    <div className="data-item">
     <span>Projects Done</span>
     <span className="num">{counts[1]}</span>
    </div>
    <div className="data-item">
     <span>Cups of Coffee</span>
     <span className="num">{counts[2]}</span>
    </div>
   </div>
  </section>
 );
}
