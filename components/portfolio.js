'use client';
import {useEffect, useRef, useState} from 'react';

export default function Portfolio() {
 const sectionRef = useRef(null);
 const [change, setChange] = useState(false);

 useEffect(() => {
  const onScroll = () => {
   if (sectionRef.current) {
    const top = sectionRef.current.offsetTop;
    if (window.scrollY >= top) {
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
  <section ref={sectionRef} className={`portfolio ${change ? 'change' : ''}`}>
   <div className="portfolio-header">
    <h3>Portfolio</h3>
    <h1>Checkout My Work</h1>
   </div>
   <div className="works">
    <div className="work work-left">
     <img src="/images/work1.jpg" />
     <div className="work-info">
      <h3>Interior Design</h3>
      <h1>Giving your Home a new Style</h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
       blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas
       voluptate.
      </p>
      <a href="#">View Project</a>
     </div>
    </div>
    <div className="work work-right">
     <div className="work-info">
      <h3>Interior Design</h3>
      <h1>Giving your Home a new Style</h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
       blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas
       voluptate.
      </p>
      <a href="#">View Project</a>
     </div>
     <img src="/images/work2.jpg" />
    </div>
    <div className="work work-left">
     <img src="/images/work3.jpg" />
     <div className="work-info">
      <h3>Interior Design</h3>
      <h1>Giving your Home a new Style</h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
       blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas
       voluptate.
      </p>
      <a href="#">View Project</a>
     </div>
    </div>
    <div className="work work-right">
     <div className="work-info">
      <h3>Interior Design</h3>
      <h1>Giving your Home a new Style</h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
       blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas
       voluptate.
      </p>
      <a href="#">View Project</a>
     </div>
     <img src="/images/work4.jpg" />
    </div>
   </div>
  </section>
 );
}
