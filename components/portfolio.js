'use client';
import {useEffect, useRef, useState} from 'react';

const worksData = [
 {
  id: 1,
  image: '/images/work1.jpg',
  title: 'Interior Design',
  headline: 'Giving your Home a new Style',
  description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas voluptate.',
  direction: 'left',
 },
 {
  id: 2,
  image: '/images/work2.jpg',
  title: 'Interior Design',
  headline: 'Giving your Home a new Style',
  description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas voluptate.',
  direction: 'right',
 },
 {
  id: 3,
  image: '/images/work3.jpg',
  title: 'Interior Design',
  headline: 'Giving your Home a new Style',
  description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas voluptate.',
  direction: 'left',
 },
 {
  id: 4,
  image: '/images/work4.jpg',
  title: 'Interior Design',
  headline: 'Giving your Home a new Style',
  description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus blanditiis dolorem iste quam quibusdam et nostrum quod possimus voluptas voluptate.',
  direction: 'right',
 },
];

export default function Portfolio() {
 const sectionRef = useRef(null);
 const [change, setChange] = useState(false);

 useEffect(() => {
  const onScroll = () => {
   if (sectionRef.current) {
    const top = sectionRef.current.offsetTop;
    setChange(window.scrollY >= top);
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
    {worksData.map((work, index) => (
     <div key={work.id} className={`work work-${work.direction}`}>
      {work.direction === 'left' && <img src={work.image} alt={work.title} />}
      <div className="work-info">
       <h3>{work.title}</h3>
       <h1>{work.headline}</h1>
       <p>{work.description}</p>
       <a href="#">View Project</a>
      </div>
      {work.direction === 'right' && <img src={work.image} alt={work.title} />}
     </div>
    ))}
   </div>
  </section>
 );
}
