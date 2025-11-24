import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace with your actual loading logic

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  } 

  return (
    <>
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </>
    
  );
}

export default App;
