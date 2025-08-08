'use client'

import Navbar from '@/components/navbar';
import Landing from '@/components/landing';
import About from '@/components/about';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Achievments from '@/components/achievments';
import Footer from '@/components/footer';

export default function Home() {
 // we are now call the all components inside the main container
 return (
  <div className="container">
   <Navbar />
   <Landing />
   <About />
   <Services />
   <Portfolio />
   <Achievments />
   <Footer />
  </div>
 );
}
