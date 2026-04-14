import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clinic from './components/Clinic';
import Treatments from './components/Treatments';
import Testimonials from './components/Testimonials';
import Insurance from './components/Insurance';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0D1D3F] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Clinic />
        <Treatments />
        <Testimonials />
        <Insurance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
