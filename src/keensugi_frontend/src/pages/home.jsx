import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Who from '../components/who';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Impact from '../components/impact';
import Whychoose from '../components/whychoose';
import Quickresources from '../components/quickresource';
import Footer from '../components/footer';
import ChatBot from '../components/chatbot';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check if the script is already added
    if (!document.querySelector('#google-translate-script')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.id = 'google-translate-script'; // Add an ID to identify the script
      document.body.appendChild(script);
    }
  
    window.googleTranslateElementInit = () => {
      if (!document.querySelector('#google_translate_element').hasChildNodes()) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,sw,fr,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    };
  
    // Handle scroll
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-black text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
      <Hero />
      <Who />
      <Services />
      <Testimonials />
      <Impact />
      <Whychoose />
      <Quickresources />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Home;
