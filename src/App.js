import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Pic from './components/pictures/Pic';
function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <Pic/>
        <About/>
        <Skills/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
