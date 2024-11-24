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
    // Initialize Google Translate
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,sw,fr,ar',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    // Handle scroll
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(script);
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
