'use client'

import Navbar from '@/components/navbar';
import Landing from '@/components/landing';
import About from '@/components/about';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Achievments from '@/components/achievments';
import Footer from '@/components/footer';

export default function Home() {

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
